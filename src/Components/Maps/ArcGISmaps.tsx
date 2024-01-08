import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

import { generateCurve, Point } from './calculate';

const ArcMap: React.FC = () => {
  
  useEffect(() => {
    const initMap = async () => {
      try {
        const [Map, MapView, Graphic, Point, Polyline, SimpleLineSymbol] = await loadModules([
          'esri/Map',
          'esri/views/MapView',
          'esri/Graphic',
          'esri/geometry/Point',
          'esri/geometry/Polyline',
          'esri/symbols/SimpleLineSymbol',
          'esri/PopupTemplate',
          'esri/layers/VectorTileLayer',
          'esri/WebMap',
          'esri/widgets/TimeSlider'
        ]);

        // ArcGIS APIのCSSを読み込む
        const cssLink = document.createElement('link');
        cssLink.href = 'https://js.arcgis.com/4.23/esri/themes/light/main.css';
        cssLink.rel = 'stylesheet';
        document.head.appendChild(cssLink);

        // Mapオブジェクトの作成
        const map = new Map({
          basemap: 'dark-gray-vector',
        });

        const view = new MapView({
          container: 'viewDiv',
          map,
          center: [139.7544, 35.5554],
          zoom: 8
        });
        
        const MakePoint = (P: Point, Symbol: any) : typeof Graphic => {
          const pointGraphic = new Graphic({
            geometry: new Point({ x: P.lon, y: P.lat }),
            symbol: Symbol
          });
          return pointGraphic
        }

        // ベジエ曲線の制御点
        const controlPoints = [
          { x: 0, y: 0, name: 'Point A' , description: 'Description 1'},
          { x: 10, y: 15, name: 'Point B', description: 'Description 2' },
          { x: 20, y: 15, name: 'Point C', description: 'Description 3' },
          { x: 30, y: 0, name: 'Point D', description: 'Description 4' }
        ];

        // ベジエ曲線の座標を計算
        const calculateBezierCurvePoints = (t: number) => {
          const x =
            Math.pow(1 - t, 3) * controlPoints[0].x +
            3 * Math.pow(1 - t, 2) * t * controlPoints[1].x +
            3 * (1 - t) * Math.pow(t, 2) * controlPoints[2].x +
            Math.pow(t, 3) * controlPoints[3].x;

          const y =
            Math.pow(1 - t, 3) * controlPoints[0].y +
            3 * Math.pow(1 - t, 2) * t * controlPoints[1].y +
            3 * (1 - t) * Math.pow(t, 2) * controlPoints[2].y +
            Math.pow(t, 3) * controlPoints[3].y;

          return { x, y };
        };

        // ベジエ曲線の座標を計算してPolylineに追加
        const curvePoints: Array<Array<number>> = [];
        for (let t = 0; t <= 1; t += 0.01) {
          const point = calculateBezierCurvePoints(t);
          curvePoints.push([point.x, point.y]);
        }

        const curveLineSymbol = new SimpleLineSymbol({
          color: [0, 0, 255], // 青色
          width: 2
        });

        const curveGraphic = new Graphic({
          geometry: new Polyline({
            paths: [curvePoints]
          }),
          symbol: curveLineSymbol
        });
        view.graphics.add(curveGraphic);

        // 直線の座標
        const lineCoordinates = [
          [139.6917, 35.6895], // 開始点
          [139.751, 35.6895]   // 終了点
        ];

        // 直線のシンボル
        const lineSymbol = {
          type: 'simple-line',
          color: [226, 119, 40], // 色: RGB
          width: 2
        };

        // 直線のグラフィック
        const lineGraphic = new Graphic({
          geometry: new Polyline({
            paths: [lineCoordinates]
          }),
          symbol: lineSymbol
        });

        // マップに直線を追加
        view.graphics.add(lineGraphic);

        // curve
        const A: Point = {lon: 139.8701 , lat: 35.3401 , alt: 1};
        const B: Point = {lon: 139.6917 , lat: 35.6895 , alt: 1};
        const R: number = 25;
        const path_tmp = generateCurve(A, B, R);

        const curveGraphicSample = new Graphic({
          geometry: new Polyline({
            paths: [path_tmp.map(row => [row.lon, row.lat])]
          }),
          symbol: curveLineSymbol
        });
        view.graphics.add(curveGraphicSample);

        const pointSymbolSample = {
          type: 'simple-marker',
          color: [0, 0, 255], // 色: RGB
          size: 8
        };

        const pointGraphicA = MakePoint(A, pointSymbolSample);
        view.graphics.add(pointGraphicA);

        const pointGraphicB = MakePoint(B, pointSymbolSample);
        view.graphics.add(pointGraphicB);

        const pointSymbol2 = {
          type: 'simple-marker',
          color: [255, 0, 0], // 色: RGB
          size: 8
        };

        // 制御点のグラフィックを作成
        controlPoints.forEach((controlPoint) => {
          const pointGraphic = new Graphic({
            geometry: new Point({ x: controlPoint.x, y: controlPoint.y }),
            symbol: pointSymbol2
          });

          view.graphics.add(pointGraphic);
        });

      } catch (error) {
        console.error('Error loading ArcGIS modules:', error);
      }
    };

    initMap();
  }, []);

  return <div id="viewDiv" style={{ height: '400px' }}></div>;
};

const VirtualMap: React.FC = () => {
  useEffect(() => {
    loadModules([
      'esri/Map',
      'esri/views/MapView',
      'esri/views/SceneView',
      'esri/Graphic',
      'esri/symbols/SimpleLineSymbol',
      'esri/geometry/Polyline',
      'esri/layers/VectorTileLayer',
      'esri/WebScene',
      'esri/Basemap',
      'esri/layers/SceneLayer'
    ]).then(([Map, MapView, SceneView, Graphic, SimpleLineSymbol, Polyline, Curve, VectorTileLayer, WebScene, Basemap, SceneLayer]) => {

        // ArcGIS APIのCSSを読み込む
        const cssLink = document.createElement('link');
        cssLink.href = 'https://js.arcgis.com/4.23/esri/themes/light/main.css';
        cssLink.rel = 'stylesheet';
        document.head.appendChild(cssLink);

        // 3Dマップを作成
        const map = new Map({
          basemap: 'streets-vector',
          ground: 'world-elevation' // 3D地形を表示するために必要
        });

        // 3Dシーンビューを作成
        const view = new SceneView({
          container: '3DviewDiv',
          map: map,
          camera: {
            position: {
              x: 139.7544,
              y: 35.5554,
              z: 500
            },
            tilt: 45
          }
        });

        //Trailheads feature layer (points)
        const sceneLayer = new SceneLayer({
          url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer/layers/0"
        });

        map.add(sceneLayer);

        // 曲線を表現するCurveオブジェクトを作成
        // ベジエ曲線の制御点
        const controlPoints = [
          { x: 139.7544, y: 35.5554, z: 0, name: 'Point A' },
          { x: 139.8544, y: 35.4654, z: 500, name: 'Point B' },
          { x: 139.9544, y: 35.3854, z: 1000, name: 'Point C' },
          { x: 140.0544, y: 34.8894, z: 2000, name: 'Point D' }
        ];

        // ベジエ曲線の座標を計算
        const calculateBezierCurvePoints = (t: number) => {
          const x =
            Math.pow(1 - t, 3) * controlPoints[0].x +
            3 * Math.pow(1 - t, 2) * t * controlPoints[1].x +
            3 * (1 - t) * Math.pow(t, 2) * controlPoints[2].x +
            Math.pow(t, 3) * controlPoints[3].x;

          const y =
            Math.pow(1 - t, 3) * controlPoints[0].y +
            3 * Math.pow(1 - t, 2) * t * controlPoints[1].y +
            3 * (1 - t) * Math.pow(t, 2) * controlPoints[2].y +
            Math.pow(t, 3) * controlPoints[3].y;

          const z =
          Math.pow(1 - t, 3) * controlPoints[0].z +
          3 * Math.pow(1 - t, 2) * t * controlPoints[1].z +
          3 * (1 - t) * Math.pow(t, 2) * controlPoints[2].z +
          Math.pow(t, 3) * controlPoints[3].z;

          return { x, y, z };
        };

        // ベジエ曲線の座標を計算してPolylineに追加
        const curvePoints: Array<Array<number>> = [];
        for (let t = 0; t <= 1; t += 0.01) {
          const point = calculateBezierCurvePoints(t);
          curvePoints.push([point.x, point.y, point.z]);
        }

        const bezierCurve = new Polyline({
          paths: [curvePoints]
        });

        const lineSymbol = new SimpleLineSymbol({
          color: [0, 0, 255], // 青色
          width: 2
        });

        const curveGraphic = new Graphic({
          geometry: bezierCurve,
          symbol: lineSymbol
        });

        // 直線を表現するPolylineオブジェクトを作成
        const line = new Polyline({
          paths: [[[139.7544, 35.5554, 0], [139.8544, 35.4654, 100], [139.9544, 35.3854, 0]]],
          spatialReference: view.spatialReference
        });

        // 直線を描画するGraphicを作成
        const lineGraphic = new Graphic({
          geometry: line,
          symbol: new SimpleLineSymbol({
            color: [255, 0, 0], // 赤色
            width: 2
          })
        });

        // 地図上にジオメトリを追加
        view.graphics.addMany([curveGraphic, lineGraphic]);
        //view.graphics.add(lineGraphic);
    });

  }, []);

  return <div id="3DviewDiv" style={{ height: '400px' }}></div>;
};

const TImeSliderMap: React.FC = () => {
  const mapDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadModules([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/GeoJSONLayer",
      "esri/widgets/TimeSlider",
      "esri/widgets/Expand",
      "esri/widgets/Legend",
      "esri/core/reactiveUtils"
    ]).then(([Map, MapView, GeoJSONLayer, TimeSlider, Expand, Legend, reactiveUtils]) => {
      let layerView: any;
      const layer = new GeoJSONLayer({
        url: "https://bsvensson.github.io/various-tests/geojson/usgs-earthquakes-06182019.geojson",
        copyright: "USGS Earthquakes",
        title: "USGS Earthquakes",
        // set the CSVLayer's timeInfo based on the date field
        timeInfo: {
          startField: "time", // name of the date field
          interval: {
            // set time interval to one day
            unit: "days",
            value: 1
          }
        },
        orderBy: {
          field: "mag"
        },
        renderer: {
          type: "simple",
          field: "mag",
          symbol: {
            type: "simple-marker",
            color: "orange",
            outline: null
          },
          visualVariables: [
            {
              type: "size",
              field: "mag",
              stops: [
                {
                  value: 1,
                  size: "5px"
                },
                {
                  value: 2,
                  size: "15"
                },
                {
                  value: 3,
                  size: "35"
                }
              ]
            },
            {
              type: "color",
              field: "depth",
              stops: [
                {
                  value: 2.5,
                  color: "#F9C653",
                  label: "<2km"
                },
                {
                  value: 3.5,
                  color: "#F8864D",
                  label: "3km"
                },
                {
                  value: 4,
                  color: "#C53C06",
                  label: ">4km"
                }
              ]
            }
          ]
        },
        popupTemplate: {
          title: "{title}",
          content: [
            {
              type: "fields",
              fieldInfos: [
                {
                  fieldName: "place",
                  label: "Location",
                  visible: true
                },
                {
                  fieldName: "mag",
                  label: "Magnitude",
                  visible: true
                },
                {
                  fieldName: "depth",
                  label: "Depth",
                  visible: true
                }
              ]
            }
          ]
        }
      });

      const map = new Map({
        basemap: "dark-gray-vector",
        layers: [layer]
      });

      const view = new MapView({
        map: map,
        container: "TimeviewDiv",
        zoom: 13,
        center: [-117.512764, 34.04355]
      });


      // create a new time slider widget
      // set other properties when the layer view is loaded
      // by default timeSlider.mode is "time-window" - shows
      // data falls within time range
      const timeSlider = new TimeSlider({
        container: "timeSlider",
        playRate: 50,
        stops: {
          interval: {
            value: 1,
            unit: "hours"
          }
        }
      });
      view.ui.add(timeSlider, "bottom-left");

      const setupTimeSlider = async () => {
        // wait till the layer view is loaded
        const lv = await view.whenLayerView(layer);
        layerView = lv;

        // start time of the time slider - 5/25/2019
        const start = new Date(2019, 4, 25);
        // set time slider's full extent to
        // 5/25/5019 - until end date of layer's fullTimeExtent
        timeSlider.fullTimeExtent = {
          start: start,
          end: layer.timeInfo.fullTimeExtent.end
        };

        // We will be showing earthquakes with one day interval
        // when the app is loaded we will show earthquakes that
        // happened between 5/25 - 5/26.
        let end = new Date(start);
        // end of current time extent for time slider
        // showing earthquakes with one day interval
        end.setDate(end.getDate() + 1);

        // timeExtent property is set so that timeslider
        // widget show the first day. We are setting
        // the thumbs positions.
        timeSlider.timeExtent = { start, end };
      };


      // watch for time slider timeExtent change
      reactiveUtils.watch(
        () => timeSlider.timeExtent,
        async () => {
          // only show earthquakes happened up until the end of
          // timeSlider's current time extent.
          const date = new Date(timeSlider.timeExtent.end).toISOString().replace("T", " ").replace("Z","");
          layer.definitionExpression = "time <= Timestamp '" + date + "'";

          // now gray out earthquakes that happened before the time slider's current
          // timeExtent... leaving footprint of earthquakes that already happened
          layerView.featureEffect = {
            filter: {
              timeExtent: timeSlider.timeExtent,
              geometry: view.extent
            },
            excludedEffect: "grayscale(20%) opacity(12%)"
          };

          // run statistics on earthquakes fall within the current time extent
          const statQuery = layerView.featureEffect.filter.createQuery();
          statQuery.outStatistics = [magMax, magAvg, magMin, tremorCount, avgDepth];

          try {
            const result = await layer.queryFeatures(statQuery);
            let htmls = [];
            // statsDiv?  statsDiv.innerHTML = "" : statsDiv;
            if (result.error) {
              return result.error;
            } else {
              if (result.features.length >= 1) {
                const attributes = result.features[0].attributes;
                // for (name in statsFields) {
                //   if (attributes[name] && attributes[name] != null) {
                //     const html =
                //       "<br/>" + statsFields[name] + ": <b><span> " + attributes[name].toFixed(2) + "</span></b>";
                //     htmls.push(html);
                //   }
                // }
                // const yearHtml =
                //   "<span>" +
                //   result.features[0].attributes["tremor_count"] +
                //   "</span> earthquakes were recorded between " +
                //   timeSlider.timeExtent.start.toLocaleDateString() +
                //   " - " +
                //   timeSlider.timeExtent.end.toLocaleDateString() +
                //   ".<br/>";

                // if (htmls[0] == undefined) {
                //   statsDiv ? statsDiv.innerHTML = yearHtml : statsDiv;
                // } else {
                //   statsDiv ? statsDiv.innerHTML = yearHtml + htmls[0] + htmls[1] + htmls[2] + htmls[3] : statsDiv;
                // }
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
      );

      setupTimeSlider();

      const avgDepth = {
        onStatisticField: "depth",
        outStatisticFieldName: "Average_depth",
        statisticType: "avg"
      };

      const magMax = {
        onStatisticField: "mag",
        outStatisticFieldName: "Max_magnitude",
        statisticType: "max"
      };

      const magAvg = {
        onStatisticField: "mag",
        outStatisticFieldName: "Average_magnitude",
        statisticType: "avg"
      };

      const magMin = {
        onStatisticField: "mag",
        outStatisticFieldName: "Min_magnitude",
        statisticType: "min"
      };

      const tremorCount = {
        onStatisticField: "mag",
        outStatisticFieldName: "tremor_count",
        statisticType: "count"
      };

      let statsFields = {
        Max_magnitude: "Max magnitude",
        Average_magnitude: "Average magnitude",
        Min_magnitude: "Min magnitude",
        Average_depth: "Average Depth"
      };

      // add a legend for the earthquakes layer
      const legendExpand = new Expand({
        expandTooltip: "Legend",
        view: view,
        content: new Legend({
          view: view
        }),
        expanded: false
      });
      view.ui.add(legendExpand, "top-left");

      const statsDiv = document.getElementById("statsDiv");
      const infoDiv = document.getElementById("infoDiv");
      const infoDivExpand = new Expand({
        expandTooltip: "Expand earthquakes info",
        view: view,
        content: infoDiv,
        expanded: true
      });
      view.ui.add(infoDivExpand, "top-right");
    });
  }, []);

  return (
    <div>
      <div id="TimeviewDiv" style={{ width: '100%', height: '500px' }}></div>
      <div ref={mapDivRef} style={{ width: '100%', height: '500px' }} />
      <div id="timeSliderContainer" />
    </div>
  );
};

const WidgetMap: React.FC = () => {
  useEffect(() => {
    loadModules([
      "esri/Map", "esri/Basemap", "esri/views/SceneView", "esri/widgets/BasemapGallery"
    ]).then(([Map,
      Basemap,
      SceneView,
      BasemapGallery]) => {
        // ArcGIS APIのCSSを読み込む
        const cssLink = document.createElement('link');
        cssLink.href = 'https://js.arcgis.com/4.23/esri/themes/light/main.css';
        cssLink.rel = 'stylesheet';
        document.head.appendChild(cssLink);

        const map = new Map({
          basemap: 'dark-gray-vector'
        });

        const view = new SceneView({
          container: "WidgetviewDiv",
          map: map,
          camera: {
            position: {
              longitude: -74.03423765,
              latitude: 40.69173202,
              z: 1620.71497
            },
            heading: 57.02,
            tilt: 56.97
          } // Manhattan, NY
        });

         // 利用可能なベースマップのリスト
         const basemaps = [
          Basemap.fromId("topo"),
          Basemap.fromId("streets"),
          Basemap.fromId("satellite"),
          // 他にも適切な Basemap インスタンスを追加
        ];
        const basemapGallery = new BasemapGallery({
          view: view,
          source: basemaps
        });

        // Add the widget to the top-right corner of the view
        view.ui.add(basemapGallery, {
          position: "top-right"
        });
      })
    }, [])
    return <div id="WidgetviewDiv" style={{ height: '400px' }}></div>;
};


export default function Maps(){
  return(
    <div>
      <ArcMap />
      <VirtualMap />
      <TImeSliderMap />
      <WidgetMap />
    </div>
    
  )
}



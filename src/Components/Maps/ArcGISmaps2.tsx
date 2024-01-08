import React, { useRef, useEffect } from 'react';
import { loadModules } from 'esri-loader';

const MapWithTimeSlider: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // モジュールのロード
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/TimeSlider', 'esri/layers/GraphicsLayer', 'esri/Graphic'])
      .then(([Map, MapView, TimeSlider, GraphicsLayer, Graphic]) => {
        // ベースマップの作成
        const map = new Map({
          basemap: 'streets'
        });

        // マップビューの作成
        const view = new MapView({
          container: mapRef.current!,
          map,
          center: [0, 0],
          zoom: 2
        });

        // グラフィックスレイヤーの作成
        const graphicsLayer = new GraphicsLayer();

        // マップにレイヤーを追加
        map.add(graphicsLayer);

        // ポリゴンのサンプルデータ
        const polygonData = [
          [-50, 20],
          [-40, 40],
          [-30, 20],
          [-20, 40],
          [-10, 20],
          [0, 40],
          [10, 20],
          [20, 40],
          [30, 20],
          [40, 40],
          [50, 20]
        ];

        // タイムスライダーの作成
        const timeSlider = new TimeSlider({
          container: 'timeSlider',
          playRate: 1000,
          stops: {
            interval: {
              value: 1,
              unit: 'hours'
            }
          }
        });

        // タイムスライダーにリストナーを追加
        timeSlider.watch('timeExtent', (timeExtent: any) => {
          // ポリゴンの表示をクリア
          graphicsLayer.removeAll();

          // 指定時刻に応じてポリゴンを表示
          const currentTime = timeExtent.start.getTime();
          const graphic = new Graphic({
            geometry: {
              type: 'polygon',
              rings: polygonData
            },
            symbol: {
              type: 'simple-fill',
              color: [0, 0, 255, 0.5],
              outline: {
                color: [0, 0, 0, 1],
                width: 1
              }
            }
          });

          if (currentTime % 2 === 0) {
            // 指定時刻が偶数の場合のみポリゴンを表示
            graphicsLayer.add(graphic);
          }
        });

        // ビューにタイムスライダーを追加
        view.ui.add(timeSlider, 'bottom');
      })
      .catch((err) => {
        console.error('Failed to load modules', err);
      });
  }, []);

  return (
    <div>
      <div ref={mapRef} style={{ height: '500px' }}></div>
      <div id="timeSlider"></div>
    </div>
  );
};

export default MapWithTimeSlider;

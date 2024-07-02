/**
 * Mapを描画する(Leafret, React-Leafret)
 */

import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import "@elfalem/leaflet-curve";
import data from './data.json';
import BezieCurve from "./BezieCurve";

const MyMapComponent: React.FC = () => {
  useEffect(() => {
    const map = L.map('mymap').setView([35.5512, 139.7797], 15);

    // Leafletの地図タイルを追加（例：OpenStreetMap）
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    
    // ポイントをマーカーとして追加
    data.points.forEach((point) => {
      L.marker([point.lat, point.lng]).addTo(map).bindPopup(`Point ${point.id}`);
    });

    // ラインを描画
    data.lines.forEach((line) => {
      const startPoint = data.points.find((point) => point.id === line.start);
      const endPoint = data.points.find((point) => point.id === line.end);

      if (startPoint && endPoint) {
        if (line.type === 'line') {
          // 直線
          L.polyline([[startPoint.lat, startPoint.lng], [endPoint.lat, endPoint.lng]], { color: 'blue' }).addTo(map);
        } else if (line.type === 'curve') {
          // 曲線（仮の実装）
          let c_point = BezieCurve({startlat:startPoint.lat, startlng:startPoint.lng, endlat:endPoint.lat, endlng:endPoint.lng, theta:45})
          L.curve(
            ['M', [startPoint.lat, startPoint.lng], 
             'S', [c_point.lat, c_point.lng], 
             [endPoint.lat, endPoint.lng]], { color: 'red' }).addTo(map);
        }
      }
    });

    return () => {
        // マップをクリーンアップ
        map.remove();
      };
  }, []);

  return <div id="mymap" style={{ height: '600px' }} />;
};

export default MyMapComponent;

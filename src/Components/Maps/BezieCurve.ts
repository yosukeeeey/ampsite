type Props = {
    startlat: number, 
    startlng: number,
    endlat: number, 
    endlng: number,
    theta: number
}

type result = {
    lat: number,
    lng: number
}

export default function BezieCurve(props: 
    {startlat: number, 
    startlng: number,
    endlat: number, 
    endlng: number,
    theta: number}): result {
    const rad = toRadians(props.theta);
    let cy = ( props.startlat + props.endlat ) / 2;
    let cx = ( props.startlng + props.endlng ) / 2;

    let d = Math.sqrt(cy^2 + cx^2);
    let px = cx + d * Math.tan(rad) * Math.sin(rad);
    let py = cx + d * Math.tan(rad) * Math.cos(rad);
    
    return ({lat: py, lng: px});
}

function toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }


// 2点間の距離を計算する関数（Haversine式）
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const earthRadius = 6371; // 地球の半径（キロメートル）
  
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distance = earthRadius * c; // 2点間の距離（キロメートル）
  
    return distance;
  }
  // 中心座標から指定の角度と距離離れた座標を計算する関数
  function calculateCoordinateFromCenter(
    centerLat: number,
    centerLon: number,
    angle: number,
    distance: number
  ): { latitude: number; longitude: number } {
    const earthRadius = 6371; // 地球の半径（キロメートル）
  
    const lat1 = toRadians(centerLat);
    const lon1 = toRadians(centerLon);
    const angularDistance = distance / earthRadius;
  
    const lat2 = Math.asin(Math.sin(lat1) * Math.cos(angularDistance) + Math.cos(lat1) * Math.sin(angularDistance) * Math.cos(angle));
    const lon2 = lon1 + Math.atan2(Math.sin(angle) * Math.sin(angularDistance) * Math.cos(lat1), Math.cos(angularDistance) - Math.sin(lat1) * Math.sin(lat2));
  
    return { latitude: lat2 * (180 / Math.PI), longitude: lon2 * (180 / Math.PI) };
  }

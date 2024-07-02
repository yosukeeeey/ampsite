export interface Point {
    lon: number; // 経度
    lat: number; // 緯度
    alt: number; // 高度
  }
  
  // 地球の半径（単位：キロメートル）
  const EARTH_RADIUS = 6378.175;
  
  // 緯度経度から直交座標系へ変換
  function toCartesian(point: Point): Point {
    const x = EARTH_RADIUS * Math.cos(point.lat) * Math.cos(point.lon);
    const y = EARTH_RADIUS * Math.cos(point.lat) * Math.sin(point.lon);
    const z = EARTH_RADIUS * Math.sin(point.alt);
  
    return { lat: x, lon: y, alt: z };
  }
  
  // 直交座標系から緯度経度へ逆変換
  function toGeographic(cartesian: Point): Point {
    const lat = Math.asin(cartesian.alt / EARTH_RADIUS);
    const lon = Math.atan2(cartesian.lat, cartesian.lon);
  
    return { lat: lat, lon: lon, alt: cartesian.alt };
  }
  
  // 2点の間の角度を計算
  function calculateAngle(A: Point, B: Point): number {
    const m_lat = (A.lat + B.lat) / 2;

    // km
    const defLat = (B.lat - A.lat) * Math.PI / 180 / EARTH_RADIUS ;
    const defLon = (B.lon - A.lon) * Math.PI / 180 / (EARTH_RADIUS * Math.cos(m_lat * Math.PI / 180));
    // radians
    const angle = Math.atan2(defLat, defLon);
    return angle;
  }
  
  // 地球上の2点を円弧で結ぶ
export function generateCurve(A: Point, B: Point, R: number): Point[] {
    const numbers = 1000;
    let cnt = 0;
    // calculate curve center
    const m_x = (A.lon + B.lon) / 2;
    const m_y = (A.lat + B.lat) / 2;

    const dis = EARTH_RADIUS * Math.acos(Math.sin(A.lat * Math.PI / 180) * Math.sin(B.lat * Math.PI / 180) + (Math.cos(A.lat * Math.PI / 180) * Math.cos(B.lat * Math.PI / 180) * Math.cos((B.lon - A.lon) * Math.PI / 180 )));
    const u_x = ((B.lon - A.lon) * Math.PI / 180) * EARTH_RADIUS * Math.cos(m_y * Math.PI / 180) / dis;
    const u_y = ((B.lat - A.lat) * Math.PI / 180) * EARTH_RADIUS / dis;
    
    // vector horizon
    const v_x = -u_y;
    const v_y = u_x;
    const theta_fix = Math.atan2(u_y, u_x);

    // center of Circle
    const h = Math.sqrt(Math.pow(R, 2) - Math.pow(dis / 2, 2));
    const c_x = m_x + v_x * h / (EARTH_RADIUS * Math.cos(m_y * Math.PI / 180)) * 180 / Math.PI;
    const c_y = m_y + v_y * h / (EARTH_RADIUS) * 180 / Math.PI;
    console.log(c_x, c_y);

    // calculate theta
    const c1_x = ((A.lon - c_x) * Math.PI / 180) * EARTH_RADIUS * Math.cos(m_y * Math.PI / 180);
    const c1_y = ((A.lat - c_y) * Math.PI / 180) * EARTH_RADIUS;

    const c2_x = ((B.lon - c_x) * Math.PI / 180) * EARTH_RADIUS * Math.cos(m_y * Math.PI / 180);
    const c2_y = ((B.lat - c_y) * Math.PI / 180) * EARTH_RADIUS;

    // let theta_1 = Math.atan2(c1_y, c1_x) - theta_fix;
    // let theta_2 = Math.atan2(c2_y, c2_x) - theta_fix;
    let theta_1 = Math.atan2(c1_y, c1_x);
    let theta_2 = Math.atan2(c2_y, c2_x);

    let num;
    if((theta_1 - theta_2) > Math.PI){
        num = (2* Math.PI - (theta_2 - theta_1)) / numbers;
    }else{
        num = (theta_2 - theta_1) / numbers;
    }

    let paths: Array<Point> = [];
    let delta_z = (B.alt - A.alt) / numbers;
    for(let i = theta_1; i < theta_2; i += num){
        //let x = c_x + R * Math.cos(i) * u_x / (EARTH_RADIUS * Math.cos(m_y * Math.PI / 180)) * 180 / Math.PI + R * Math.sin(i) * v_x / (EARTH_RADIUS * Math.cos(m_y * Math.PI / 180)) * 180 / Math.PI;
        let x = c_x + R * Math.cos(i) / (EARTH_RADIUS * Math.cos(m_y * Math.PI / 180)) * 180 / Math.PI;
        //let y = c_y + R * Math.cos(i) * u_y / (EARTH_RADIUS ) * 180 / Math.PI + R * Math.sin(i) * v_y / (EARTH_RADIUS) * 180 / Math.PI;
        let y = c_y + R * Math.sin(i)  / (EARTH_RADIUS) * 180 / Math.PI;
        let z = A.lat + delta_z * cnt;
        paths.push({lon: x, lat: y, alt: z});
        cnt++;
    }
    return paths;
  }
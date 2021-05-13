const fetch = require('node-fetch');
const config = require('../config/key');
const parser = require('xml2json');

var list = []
var sickness = {
  "응급실":"MKioskTy25",
  "뇌출혈수술":"MKioskTy1",
  "뇌경색의재관류":"MKioskTy2",
  "심근경색의재관류":"MKioskTy3",
  "복부손상의수술":"MKioskTy4",
  "사지접합의수술":"MKioskTy5",
  "응급내시경":"MKioskTy6",
  "응급투석":"MKioskTy7",
  "조산산모":"MKioskTy8",
  "정신질환자":"MKioskTy9",
  "신생아":"MKioskTy10",
  "중증화상":"MKioskTy11"
  };


const getList = async () => {
  for (var i = 1; i < 6; i++) {
    request_url = 'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytListInfoInqire'
    request_url += `?ServiceKey=${config.api_key}`
    request_url += `&numOfRows=100`
    request_url += `&pageNo=${i}`
    
    let res = await fetch(request_url, { method: 'get' })
    res = await fetch(request_url, { method: 'get' });
    res = await res.text();
    res = await parser.toJson(res, { object: true });
    if (res.response) {
      for (item of res.response.body.items.item) {
        const info = await getDetail(item.hpid);
        if (info) {
          list.push(info);
        }
      }
    }
    
  }
}

function getDistance(lat1, lon1, lat2, lon2) {
  if ((lat1 == lat2) && (lon1 == lon2))
      return 0;

  var radLat1 = Math.PI * lat1 / 180;
  var radLat2 = Math.PI * lat2 / 180;
  var theta = lon1 - lon2;
  var radTheta = Math.PI * theta / 180;
  var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
  if (dist > 1)
      dist = 1;

  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515 * 1.609344 * 1000;
  if (dist < 100) dist = Math.round(dist / 10) * 10;
  else dist = Math.round(dist / 100) * 100;

  return dist;
}

const getDetail = async (hpid) => {

  try {
    let request_url = 'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytBassInfoInqire';
    request_url += `?ServiceKey=${config.api_key}`
    request_url += `&HPID=${hpid}`;
  
    let res = await fetch(request_url, { method: 'get' });
    res = await res.text();
    res = await parser.toJson(res, { object: true });
    if (res.response) {
      return res.response.body.items.item;
    }
  } catch (err) {
    console.error(err);
  }

}

const getHosByPos = async(lat, lon, maxDistance, disease) => {
  if ( disease ) {
    disease = sickness[disease];
  }
  if (! maxDistance) {
    maxDistance = 2000;
  }
  if (list.length == 0) {
    await getList();
  }
  let newList = []
  for (item of list) {
    const distance = getDistance(lat, lon, item.wgs84Lat, item.wgs84Lon);
    if (distance <= maxDistance) {
      if (disease && item[disease] =='N') {
        continue;
      }
      newList.push({
        hpid: item.hpid,
        name: item.dutyName,
        lat: item.wgs84Lat? item.wgs84Lat : null,
        lon: item.wgs84Lon? item.wgs84Lon : null,
        dutytime: item.dutyTime5s? `${item.dutyTime5s.slice(0,2)}:${item.dutyTime5s.slice(2,4)}~${item.dutyTime5c.slice(0,2)}:${item.dutyTime5c.slice(2,4)}`: null,
        distance,
      })
    }
  }
  
  return newList;
}

// const x = async () => {
//   const y = await getHosByPos(37.51827233800712, 126.93673129599131, 5000);
//   console.log(y);

// }  
// x();

module.exports = {
  getHosByPos,
}
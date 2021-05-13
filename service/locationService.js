const fetch = require('node-fetch');
const config = require('../config/key');
const parser = require('xml2json');
var list = []


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
    
    for (item of res.response.body.items.item) {
      const info = await getDetail(item.hpid);
      if (info) {
        list.push({
          dgid : info.dgidIdName,
          hpid: info.hpid,
          name: info.dutyName,
          x: info.wgs84Lat? info.wgs84Lat : null,
          y: info.wgs84Lon? info.wgs84Lon : null,
          dutytime: info.dutyTime5s? `${info.dutyTime5s.slice(0,2)}:${info.dutyTime5s.slice(2,4)}-${info.dutyTime5c.slice(0,2)}:${info.dutyTime5c.slice(2,4)}`: null,
        })
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
  let request_url = 'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytBassInfoInqire';
  request_url += `?ServiceKey=${config.api_key}`
  request_url += `&HPID=${hpid}`;

  let res = await fetch(request_url, { method: 'get' });
  res = await res.text();
  res = await parser.toJson(res, { object: true });
  return res.response.body.items.item;

}

const getHosByPos = async(lat, lon) => {
  if (list.length == 0) {
    await getList();
  }
  const newList = []
  for (item of list) {
    const distance = getDistance(lat, lon, item.x, item.y);
    // console.log(item, distance)
    newList.push({...item, distance})
  }
  // console.log(newList.length);
  // console.log(newList[0])
  return newList;
}

getHosByPos(37.54084479467721, 127.0721229093036);
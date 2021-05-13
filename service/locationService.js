const fetch = require('node-fetch');
const config = require('../config/key');
const parser = require('xml2json');
var list = [
  {
    dgidIdName: '가정의학과,내과,마취통증의학과,방사선종양학과,병리과,보건(의료원)소,비뇨기과,산부인과,성형외과,소아청소년과,신경과,신경외과,안과,영상의학과,외과,응급의학과,이비인후과,재활의학과,정신건강의학과,정형외과,진단검사의학과,치과보존과,피부과,핵의학과,흉부외과',
    dutyAddr: '서울특별시 영등포구 63로 10, 여의도성모병원 (여의도동)',
    dutyEryn: '1',
    dutyHano: '532',
    dutyHayn: '1',
    dutyMapimg: '샛강역 3번 출구',
    dutyName: '가톨릭대학교여의도성모병원',
    dutyTel1: '1661-7575',
    dutyTel3: '02-3779-1188',
    dutyTime1c: '1700',
    dutyTime1s: '0900',
    dutyTime2c: '1700',
    dutyTime2s: '0900',
    dutyTime3c: '1700',
    dutyTime3s: '0900',
    dutyTime4c: '1700',
    dutyTime4s: '0900',
    dutyTime5c: '1700',
    dutyTime5s: '0900',
    dutyTime6c: '1200',
    dutyTime6s: '0900',
    hpbdn: '440',
    hpccuyn: '0',
    hpcuyn: '0',
    hperyn: '20',
    hpgryn: '351',
    hpicuyn: '19',
    hpid: 'A1100011',
    hpnicuyn: '9',
    hpopyn: '10',
    hvec: '0',
    hvgc: '49',
    hvncc: '4',
    hvoc: '4',
    MKioskTy1: 'Y',
    MKioskTy10: 'Y',
    MKioskTy11: 'N',
    MKioskTy2: 'Y',
    MKioskTy25: 'Y',
    MKioskTy3: 'Y',
    MKioskTy4: 'Y',
    MKioskTy5: 'Y',
    MKioskTy6: 'Y',
    MKioskTy7: 'Y',
    MKioskTy8: 'Y',
    MKioskTy9: 'N',
    postCdn1: '073',
    postCdn2: '45',
    wgs84Lat: '37.51827233800711',
    wgs84Lon: '126.93673129599131'
  },
  {
    dgidIdName: '가정의학과,내과,마취통증의학과,방사선종양학과,병리과,보건(의료원)소,비뇨기과,산부인과,성형외과,소아청소년과,신경과,신경외과,안과,영상의학과,외과,응급의학과,이비인후과,재활의학과,정신건강의학과,정형외과,진단검사의학과,치과보철과,피부과,핵의학과,흉부외과',
    dutyAddr: '경기도 의정부시 천보로 271, 의정부성모병원 (금오동)',
    dutyEryn: '1',
    dutyHano: '741',
    dutyHayn: '1',
    dutyName: '가톨릭대학교의정부성모병원',
    dutyTel1: '1661-7500',
    dutyTel3: '031-820-5200',
    dutyTime1c: '1700',
    dutyTime1s: '0830',
    dutyTime2c: '1700',
    dutyTime2s: '0830',
    dutyTime3c: '1700',
    dutyTime3s: '0830',
    dutyTime4c: '1700',
    dutyTime4s: '0830',
    dutyTime5c: '1700',
    dutyTime5s: '0830',
    dutyTime6c: '1200',
    dutyTime6s: '0830',
    hpbdn: '767',
    hperyn: '59',
    hpgryn: '557',
    hpicuyn: '13',
    hpid: 'A2100040',
    hpnicuyn: '17',
    hpopyn: '13',
    hvec: '11',
    hvgc: '75',
    hvicc: '0',
    hvncc: '1',
    hvoc: '5',
    MKioskTy1: 'N',
    MKioskTy10: 'Y',
    MKioskTy11: 'Y',
    MKioskTy2: 'N',
    MKioskTy25: 'Y',
    MKioskTy3: 'N',
    MKioskTy4: 'Y',
    MKioskTy5: 'Y',
    MKioskTy6: 'Y',
    MKioskTy7: 'Y',
    MKioskTy8: 'Y',
    MKioskTy9: 'Y',
    postCdn1: '117',
    postCdn2: '65',
    wgs84Lat: '37.75865547828227',
    wgs84Lon: '127.07767290194454'
  },
  {
    dgidIdName: '가정의학과,내과,마취통증의학과,방사선종양학과,병리과,비뇨기과,산부인과,성형외과,소아청소년과,신경과,신경외과,안과,영상의학과,외과,응급의학과,이비인후과,재활의학과,정신건강의학과,정형외과,진단검사의학과,치과,피부과,핵의학과,흉부외과',
    dutyAddr: '인천광역시 부평구 동수로 56 (부평동)',
    dutyEryn: '1',
    dutyHano: '894',
    dutyHayn: '1',
    dutyInf: '병상수821(응급36,중환자51,일반731) / 혈액투석, 체외충격파쇄석술, 재관류, 알콜중독, 정신과진료는 본원외래 내원하시는 분만 가능.',
    dutyMapimg: '동수역2번출구 하차 후 도보10분',
    dutyName: '가톨릭대학교인천성모병원',
    dutyTel1: '032-280-6364',
    dutyTel3: '032-280-6107',
    dutyTime1c: '1700',
    dutyTime1s: '0800',
    dutyTime2c: '1700',
    dutyTime2s: '0800',
    dutyTime3c: '1700',
    dutyTime3s: '0800',
    dutyTime4c: '1700',
    dutyTime4s: '0800',
    dutyTime5c: '1700',
    dutyTime5s: '0800',
    dutyTime6c: '1200',
    dutyTime6s: '0800',
    hpbdn: '846',
    hperyn: '25',
    hpgryn: '719',
    hpicuyn: '18',
    hpid: 'A1400012',
    hpnicuyn: '11',
    hpopyn: '17',
    hvec: '6',
    hvgc: '123',
    hvncc: '6',
    hvoc: '3',
    MKioskTy1: 'Y',
    MKioskTy10: 'Y',
    MKioskTy11: 'Y',
    MKioskTy2: 'Y',
    MKioskTy25: 'Y',
    MKioskTy3: 'Y',
    MKioskTy4: 'Y',
    MKioskTy5: 'Y',
    MKioskTy6: 'Y',
    MKioskTy7: 'Y',
    MKioskTy8: 'Y',
    MKioskTy9: 'Y',
    postCdn1: '214',
    postCdn2: '31',
    wgs84Lat: '37.4845586499062',
    wgs84Lon: '126.724708130675'
  },
  {
    dgidIdName: '가정의학과,내과,마취통증의학과,비뇨기과,산부인과,소아청소년과,신경과,신경외과,영상의학과,예방치과,외과,응급의학과,이비인후과,정신건강의학과,정형외과,진단검사의학과',
    dutyAddr: '경기도 용인시 기흥구 중부대로 411, 강남병원 (신갈동)',
    dutyEryn: '1',
    dutyHano: '219',
    dutyHayn: '1',
    dutyName: '강남병원',
    dutyTel1: '031-300-0114',
    dutyTel3: '031-300-0119',
    dutyTime1c: '1730',
    dutyTime1s: '0830',
    dutyTime2c: '1730',
    dutyTime2s: '0830',
    dutyTime3c: '1730',
    dutyTime3s: '0830',
    dutyTime4c: '1730',
    dutyTime4s: '0830',
    dutyTime5c: '1730',
    dutyTime5s: '0830',
    dutyTime6c: '1230',
    dutyTime6s: '0830',
    hpbdn: '299',
    hpccuyn: '0',
    hpcuyn: '0',
    hperyn: '20',
    hpgryn: '279',
    hpicuyn: '20',
    hpid: 'A2100029',
    hpnicuyn: '0',
    hpopyn: '5',
    hvec: '17',
    hvgc: '57',
    hvicc: '5',
    hvoc: '4',
    MKioskTy1: 'Y',
    MKioskTy10: 'N',
    MKioskTy11: 'N',
    MKioskTy2: 'Y',
    MKioskTy25: 'Y',
    MKioskTy3: 'N',
    MKioskTy4: 'Y',
    MKioskTy5: 'Y',
    MKioskTy6: 'Y',
    MKioskTy7: 'Y',
    MKioskTy8: 'N',
    MKioskTy9: 'N',
    postCdn1: '170',
    postCdn2: '64',
    wgs84Lat: '37.27377983891884',
    wgs84Lon: '127.11140719951389'
  }
]

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
          console.log(info)
          list.push(info);
          //   hpid: info.hpid,
          //   name: info.dutyName,
          //   x: info.wgs84Lat? info.wgs84Lat : null,
          //   y: info.wgs84Lon? info.wgs84Lon : null,
          //   dutytime: info.dutyTime5s? `${info.dutyTime5s.slice(0,2)}:${info.dutyTime5s.slice(2,4)}-${info.dutyTime5c.slice(0,2)}:${info.dutyTime5c.slice(2,4)}`: null,
          // })
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
        x: item.wgs84Lat? item.wgs84Lat : null,
        y: item.wgs84Lon? item.wgs84Lon : null,
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
const fetch = require('node-fetch');
const config = require('../config/key');

const getLocationByPos = async (longitude, latitude) => {
  let request_url = 'https://dapi.kakao.com/v2/local/geo/coord2address.json?';
  const headers = {
    Authorization: `KakaoAK ${config.kakao_api_key}`
  }
  request_url += `x=${longitude}`;
  request_url += `&y=${latitude}`;

  fetch(request_url, {
    method: 'get',
    headers,
  })
    .then(res => res.json())
    .then(json => {
      const region_1 = json.documents[0].road_address.region_1depth_name;
      const region_2 = json.documents[0].road_address.region_2depth_name;
      return {region_1, region_2}
    })
    
}

// getLocationByPos(126.93920205178, 37.471077623795);

module.exports = {
  getLocationByPos,
}
/*
const fetch = require("node-fetch");
var log = require("../fs/logFileSave")


hostpital.getEmergencyMedicalCenter = function (Q0 = '서울특별시',Q1 = '강남구') {

    var url = 'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEmrrmRltmUsefulSckbdInfoInqire';
    var queryParams = '?' + encodeURIComponent('ServiceKey') + '=서비스키'; 
    queryParams += '&' + encodeURIComponent('STAGE1') + '=' + encodeURIComponent(Q0); 
    queryParams += '&' + encodeURIComponent('STAGE2') + '=' + encodeURIComponent(Q1); 
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); 
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); 
   
    fetch(url+queryParams)
    .then(res => {
      // response 처리
      console.log(res);
      log.writeLog(res);
      // 응답을 JSON 형태로 파싱
      //return res.json();
      return res;
    })
    .then(data => {
      //log.writeLog(JSON.stringify(data));
    })
    .catch(err => {
      // error 처리
      console.log('Fetch Error', err);
    });

    return keyArr;
}



hostpital.getSurgeryCenter = function () {
    fetch('')
    .then(res => {
      // response 처리
      
      // 응답을 JSON 형태로 파싱
      return res.json();
    })
    .then(data => {
      //log.writeLog(JSON.stringify(data));
      
    })
    .catch(err => {
      // error 처리
      console.log('Fetch Error', err);
    });

    return keyArr;
}

module.exports = hostpital;
*/
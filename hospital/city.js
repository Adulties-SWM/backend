const fetch = require('node-fetch');
var log = require("../fs/logFileSave")
var parser = require('xml2json');

var hostpital = { };
hostpital.getEmergencyMedicalCenter = function (Q0 = '서울특별시',Q1 = '강남구'){
    var request_url = 'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytListInfoInqire';
    var queryParams = '?' + encodeURIComponent('ServiceKey') + '=%2B0EDtslnfN6Uz8aAoFZq1qrwlfcXawVqrbJFFQEYvTYzvpdIm3ZpbtneOXOSBkcO4Y3%2BdoHkKs6u5VJuXFOxRg%3D%3D'; /* Service Key*/
    queryParams += '&' + encodeURIComponent('Q0') + '=' + encodeURIComponent(Q0); /* */
    queryParams += '&' + encodeURIComponent('Q1') + '=' + encodeURIComponent(Q1); /* */
    queryParams += '&' + encodeURIComponent('QT') + '=' + encodeURIComponent('1'); /* */
    queryParams += '&' + encodeURIComponent('QZ') + '=' + encodeURIComponent('A'); /* */
    queryParams += '&' + encodeURIComponent('QD') + '=' + encodeURIComponent('D000'); /* */
    queryParams += '&' + encodeURIComponent('QN') + '=' + encodeURIComponent('(사)삼성생명공익재단 삼성서울병원'); /* */
    queryParams += '&' + encodeURIComponent('ORD') + '=' + encodeURIComponent('NAME'); /* */
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
  
    fetch(request_url + queryParams, {
        method: 'get'
    })
    .then(res =>{
        console.log(res);
        return res;
    })
    .then(data => {
        
        console.log(data)
        return {data}
    });
    
}
//hostpital.getEmergencyMedicalCenter();

module.exports = hostpital;
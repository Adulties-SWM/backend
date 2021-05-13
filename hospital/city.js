const fetch = require('node-fetch');
var log = require("../fs/logFileSave")
var parser = require('xml2json');

var hostpital = { };
hostpital.getEmergencyMedicalCenter = function (Q0 = '서울특별시',Q1 = '강남구',pageNo = '',numOfRows = ''){
    var request_url = 'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytListInfoInqire';
    var queryParams = '?' + encodeURIComponent('ServiceKey') + '=%2B0EDtslnfN6Uz8aAoFZq1qrwlfcXawVqrbJFFQEYvTYzvpdIm3ZpbtneOXOSBkcO4Y3%2BdoHkKs6u5VJuXFOxRg%3D%3D'; /* Service Key*/
    if(Q0 != '')
        queryParams += '&' + encodeURIComponent('Q0') + '=' + encodeURIComponent(Q0); /* */
    if(Q0 != '')
        queryParams += '&' + encodeURIComponent('Q1') + '=' + encodeURIComponent(Q1); /* */
    if(pageNo != '')
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo); /* */
    if(numOfRows != '')
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent(numOfRows); /* */
  
    fetch(request_url + queryParams, {
        method: 'get'
    })
    .then(res =>{
        //console.log(res);
        return res.text();
    })
    .then(data => {
        var json = parser.toJson(data);
        console.log(data);
        console.log("---------------------------");
        console.log(json);
        return json;
    });
    
}
//hostpital.getEmergencyMedicalCenter();

module.exports = hostpital;
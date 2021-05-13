const axios = require("axios");
const convert = require('xml-js');
const request = require ('request');

const emergencyInstance = axios.create({
    baseURL: "http://apis.data.go.kr/B552657/ErmctInfoInqireService",
    headers: {
        Authorization:
            "",/*key*/
    },
});

exports.getHospitalInfo = async (hpid) => {
    //응급 의료기관에서 검색
    const data = {
        HPID = hpid,
        pageNo = 1,
        numberOfRows = 10,
    };
    let res = await convert.xml2json(emergencyInstance.get("/getEmrrmRltmUsefulSckbdInfoInqire", data));
    return res;
};

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
    const data = {
        HPID = hpid,
        pageNo = 1,
        numberOfRows = 10,
    };

    //응급 의료기관 기본정보 조회
    let res = await convert.toJson(emergencyInstance.get("/getEgytBassInfoInqire", data));
    return res;
};

const axios = require("axios");
const locaService = require("../service/locationService");
const config = require("../config/key");

const emergencyInstance = axios.create({
    baseURL: "http://apis.data.go.kr/B552657/ErmctInfoInqireService",
});

exports.getHospitalInfo = async (hpid) => {
    const serviceKey = config.api_key;
    //응급 의료기관 기본정보 조회
    const uri = `/getEgytBassInfoInqire?ServiceKey=${serviceKey}&HPID=${hpid}&pageNo=1&numberOfRows=1`;
    const temp = await emergencyInstance.get(uri);
    const info = temp.data.response.body;
    //console.log(info);

    if (info.totalCount !== 1) {
        //error
    }
    return info.items.item;
};

exports.getHospitalListFromPosition = async (req, res) => {
    let { x, y, maxDistance, disease } = req.query;
    if (!maxDistance) {
        maxDistance = 50000;
    }
    const hosList = await locaService.getHosByPos(x, y, maxDistance, disease);
    return res.status(200).send({ success: true, hospitals: hosList });
};

const axios = require("axios");
const convert = require("xml2js");

const emergencyInstance = axios.create({
    baseURL: "http://apis.data.go.kr/B552657/ErmctInfoInqireService",
});

exports.getHospitalInfo = async (hpid) => {
    const data = {
        ServiceKey:
            "6QC9lid6DLI7BuAiFUYGyeKI0ApUM1jnvGawPV9K55PrmlEViLb4L%2BGc551Y6TpAURgFREbiTTJp2oTttTEsUw%3D%3D",
        HPID: hpid,
        pageNo: 1,
        numberOfRows: 10,
    };

    //응급 의료기관 기본정보 조회
    let result = await convert.toJson(
        emergencyInstance.get("/getEgytBassInfoInqire", data)
    );
    return result.body.items[0];
};

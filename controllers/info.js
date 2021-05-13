const axios = require("axios");

const emergencyInstance = axios.create({
    baseURL: "http://apis.data.go.kr/B552657/ErmctInfoInqireService",
});

exports.getHospitalInfo = async (hpid) => {
    const serviceKey =
        "6QC9lid6DLI7BuAiFUYGyeKI0ApUM1jnvGawPV9K55PrmlEViLb4L%2BGc551Y6TpAURgFREbiTTJp2oTttTEsUw%3D%3D";
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

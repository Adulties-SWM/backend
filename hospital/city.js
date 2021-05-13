const axios = require("axios");

const centerInstance = axios.create({
    baseURL: "http://apis.data.go.kr/B552657/ErmctInfoInqireService",
});

exports.getEmergencyMedicalCenter = async (Q0 = '',Q1='') => {
    const serviceKey =
        "%2B0EDtslnfN6Uz8aAoFZq1qrwlfcXawVqrbJFFQEYvTYzvpdIm3ZpbtneOXOSBkcO4Y3%2BdoHkKs6u5VJuXFOxRg%3D%3D";
    //응급 의료기관 기본정보 조회
    const uri = `/getEgytListInfoInqire?ServiceKey=${serviceKey}&Q0=${Q0}&Q1=${Q1}&numOfRows=100`;
    const temp = await centerInstance.get(uri);
    const info = temp.data.response.body;
    //console.log(info.items.item);

    if (info.totalCount !== 1) {
        //error
    }
    return info.items.item;
};

//exports.getEmergencyMedicalCenter();
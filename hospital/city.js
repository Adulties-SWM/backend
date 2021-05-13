const axios = require("axios");
const info = require("../controllers/info");
const time = require("date-utils");


var sickness = {
    "응급실":"MKioskTy25",
    "뇌출혈수술":"MKioskTy1",
    "뇌경색의재관류":"MKioskTy2",
    "심근경색의재관류":"MKioskTy3",
    "복부손상의수술":"MKioskTy4",
    "사지접합의수술":"MKioskTy5",
    "응급내시경":"MKioskTy6",
    "응급투석":"MKioskTy7",
    "조산산모":"MKioskTy8",
    "정신질환자":"MKioskTy9",
    "신생아":"MKioskTy10",
    "중증화상":"MKioskTy11"
    };


var cityname = {
    "경기":"경기도",
    "서울":"서울특별시",
    "충남":"충청남도",
    "충북":"충청북도",
    "강원":"강원도",
    "대전":"대전광역시",
    "전남":"전라남도",
    "전북":"전라북도",
    "광주":"광주광역시",
    "경북":"경상북도",
    "경남":"경상남도",
    "울산":"울산광역시",
    "부산":"부산광역시",
    "제주":"제주특별자치도"
    };
const centerInstance = axios.create({
    baseURL: "http://apis.data.go.kr/B552657/ErmctInfoInqireService",
});

const getEmergencyMedicalCenter = async (Q0 = '',Q1='') => {
    //console.log(Q0,Q1);
    Q0 = encodeURIComponent(Q0);
    Q1 = encodeURIComponent(Q1);
    const serviceKey =
        "%2B0EDtslnfN6Uz8aAoFZq1qrwlfcXawVqrbJFFQEYvTYzvpdIm3ZpbtneOXOSBkcO4Y3%2BdoHkKs6u5VJuXFOxRg%3D%3D";
    //응급 의료기관 기본정보 조회
    const uri = `/getEgytListInfoInqire?ServiceKey=${serviceKey}&Q0=${Q0}&Q1=${Q1}&numOfRows=100`;
    const temp = await centerInstance.get(uri);
    const info = temp.data.response.body;
    /*
    console.log(info.items.item);
    console.log(info.items.item[0]);
    console.log(typeof(info.items.item[0]));
    console.log(info.items.item[0].hpid);
*/
    if (info.totalCount !== 1) {
        //error
    }
    return info.items.item;
};


const getLocalHospitalInfo = async (sido, sigungu, currentAvailable, disease) =>{
    let data = await getEmergencyMedicalCenter(sido,sigungu);
    var hospital = [];
    let dutytime = "";

    if( disease == "null" ||  disease == "Null" ||  disease == "NULL" )
        disease = "" ;
        
    for(var i = 0; i < data.length ; i++){
        let detailInfo = await info.getHospitalInfo(data[i].hpid);
        if(disease == "" || detailInfo[sickness[disease]] == 'Y')
        {
            dutytime = "";
            dutytime = dutytime.concat(`${detailInfo.dutyTime5s}~${detailInfo.dutyTime5c}`);
            hospital.push({
                hpid: detailInfo.hpid,
                name : detailInfo.dutyName,
                x:parseFloat(detailInfo.wgs84Lon),
                y:parseFloat(detailInfo.wgs84Lat),
                dutytime : dutytime
            });
        }
    }
    return hospital;
}

exports.getSiGunGu = async (req, res) =>{
    let { sido, sigungu, currentAvailable, disease } = req.query; 

    let data = await getLocalHospitalInfo(sido, sigungu, currentAvailable, disease);
   // console.log(hospital);
    return res.status(200).send({ success: true, hospitals: data });
 }



//testbed


 //exports.getEmergencyMedicalCenter("서울특별시","강남구");
 //exports.getSiGunGu("서울특별시","강남구", '','');

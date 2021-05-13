const info = require("./info");

exports.getDetail = async (req, res) => {
    const hpid = req.query.hpid;
    let data = await info.getHospitalInfo(hpid);

    let dutytime = "";
    dutytime = dutytime.concat(`월(${data.dutyTime1s}~${data.dutyTime1c}),`);
    dutytime = dutytime.concat(`화(${data.dutyTime2s}~${data.dutyTime2c}),`);
    dutytime = dutytime.concat(`수(${data.dutyTime3s}~${data.dutyTime3c}),`);
    dutytime = dutytime.concat(`목(${data.dutyTime4s}~${data.dutyTime4c}),`);
    dutytime = dutytime.concat(`금(${data.dutyTime5s}~${data.dutyTime5c}),`);
    dutytime = dutytime.concat(`토(${data.dutyTime6s}~${data.dutyTime6c}),`);
    dutytime = dutytime.concat(`일(${data.dutyTime7s}~${data.dutyTime7c}),`);
    dutytime = dutytime.concat(
        `공휴일(${data.dutyTime8s}~${data.dutyTime8c}),`
    );

    const result = {
        hpid: data.hpid,
        address: data.dutyAddr,
        tel: data.dutyTel1,
        beds: data.dutyHano, //병상 수
        availableRoom: data.dutyHayn, //입원실 가용 여부
        availableBed: data.dutyEryn, //응급실 운영 여부
        dutytime: dutytime,
    };
    res.json(result);
};

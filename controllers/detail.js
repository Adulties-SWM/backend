const info = require("./info");

exports.getDetail = async (req, res) => {
    const hpid = req.query.hpid;
    let data = await info.getHospitalInfo(hpid);

    let dutytime = "";
    let temp = "";

    temp =
        data.dutyTime1s == "undefined"
            ? "휴무"
            : `${data.dutyTime1s}~${data.dutyTime1c}`;
    dutytime = dutytime.concat(`월(${temp}),`);

    temp =
        data.dutyTime2s == "undefined"
            ? "휴무"
            : `${data.dutyTime2s}~${data.dutyTime2c}`;
    dutytime = dutytime.concat(`화(${temp}),`);

    temp =
        data.dutyTime3s == "undefined"
            ? "휴무"
            : `${data.dutyTime3s}~${data.dutyTime3c}`;
    dutytime = dutytime.concat(`수(${temp}),`);

    temp =
        data.dutyTime4s == "undefined"
            ? "휴무"
            : `${data.dutyTime4s}~${data.dutyTime4c}`;
    dutytime = dutytime.concat(`목(${temp}),`);

    temp =
        data.dutyTime5s == "undefined"
            ? "휴무"
            : `${data.dutyTime5s}~${data.dutyTime5c}`;
    dutytime = dutytime.concat(`금(${temp}),`);

    temp =
        data.dutyTime6s == "undefined"
            ? "휴무"
            : `${data.dutyTime6s}~${data.dutyTime6c}`;
    dutytime = dutytime.concat(`토(${temp}),`);

    temp =
        data.dutyTime7s == "undefined"
            ? "휴무"
            : `${data.dutyTime7s}~${data.dutyTime7c}`;
    dutytime = dutytime.concat(`일(${temp}),`);

    temp =
        data.dutyTime8s == "undefined"
            ? "휴무"
            : `${data.dutyTime8s}~${data.dutyTime8c}`;
    dutytime = dutytime.concat(`공휴일(${temp})`);

    const result = {
        hpid: data.hpid,
        name: data.dutyName,
        address: data.dutyAddr,
        tel: data.dutyTel1,
        beds: data.dutyHano, //병상 수
        availableRoom: data.dutyHayn, //입원실 가용 여부
        availableBed: data.dutyEryn, //응급실 운영 여부
        dutytime: dutytime,
    };
    //console.log(result);
    res.json(result);
};

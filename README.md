# 🏥 응급의료기관 조회 서비스

## 기획의도

응급의료기관을 조회할 수 있는 지도 기반 서비스입니다.

사용자의 위치에서 가까운 순서대로 "현재 진료가 가능한" 병원을 찾아줍니다.

진료과목, 남은 병상 수 등을 조회할 수 있기 때문에 환자가 긴박한 상황에서 헛걸음하는 일을 최소화합니다.



## 기능

- 현재 위치 주변의 병원을 조회합니다.

  - 현재 위치 기준, n미터 이내에 위치한 병원 조회
  - 해당 시간에 진료가 가능한 병원 조회
  - 해당 증상의 진료가 가능한 병원 조회

- 00시 00구 내에 있는 병원 조회

  - 해당 시간에 진료가 가능한 병원 조회
  - 해당 증상의 진료가 가능한 병원 조회

- 병원에 대한 상세 정보 조회

  - 병원명, 주소, 전화번호 조회
  - 입원실 및 응급실 운영여부, 병상 수 조회 

## 개발환경
groom IDE환경에서 node.js, express, react로 개발했습니다. 
- back-end 사용 라이브러리 
  ```
    "axios": "^0.21.1",
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "dotenv": "^9.0.2",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "node-fetch": "^2.6.1",
    "pug": "2.0.0-beta11",
    "request": "^2.88.2",
    "xml-js": "^1.6.11",
    "xml2json": "^0.12.0"
  ```
## 실행방법
- back-end 키발급 이후 실행방법 
  ```
  $ npm install
  $ node app.js
  ```
## 팀원소개

- Front  End
  - 김정욱
  - 정승욱
  - 현주희
- Back End
  - 김가영
  - 박찬규
  - 이선노 



## 키 발급 방법
서버의 코드의 경우 공공데이터 api를 이용하기 위한 키가 본 SDK에 포함되어야합니다. 따라서 api_key를 아래 url에 접속하여 신청하면 무료 api를 발급 가능합니다. 
  ```
  https://data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15000563
  ```

이후 아래 스크립트를 수행하여 key값을 부여하셔서 사용 가능합니다. 

(project)/config/key.js
  ```
  module.exports = require('./dev');
  ```

(project)/config/dev.js
  ```
  module.exports = {
    kakao_api_key : "(api_key)",
    api_key: "(api_key)"
    }
  ```
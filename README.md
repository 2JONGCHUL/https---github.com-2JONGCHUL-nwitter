# 602277124 이종철
## [2022.04.14]
### 빈 화면 노출로 확인 불가 하여 원인 찾기
.env 파일 nwitter 바로 밑에 넣어주기. 하여 문제 해결

### 1. 파이어 베이스 버전 8.8.0 낮추기
npm install firebase@8.8.0

### 2. 파이어 베이스 인증 설정
[이메일/비밀번호, Google, Github 소셜 로그인]
1. Authentication, 시작하기 클릭
2. Users 탭 클릭
3. 로그인 방법 설정  클릭
4. 이메일/비밀번호, 구글, Github 사용 설정

### 3. 로그인 폼 기본구조, 상태 업데이트 (Auth.js 수정)


## [2022.04.06]
### react-router-dom 설치, 라우터 설정하기
 >npm i react-router-dom@5.2.0
> 
### 파이어 베이스 로그인 준비
jsconfig.js 파일 생성 및 작성

firebase.js 파일 이름 변경
firebase.js > fbase.js

## fbase 변경후 에러 해결방법 ../src/fbase.js
>import firebase from 'firebase/compat/app';
>import 'firebase/compat/auth';


## [2022.03.30]

### 1. firebase 설정
nwitter 폴더에서 >npm install firebase
src 폴더에 firebase.js 생성 후 파이어 베이스 웹 복사한 코드 입력

fire base 9버전 이상 하기 내용 입력
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

### 2. firebase 비밀키 
.env 파일 생성 

### 3. 라우터
routes, components 각각 폴더 생성
routes - Auth.js, EditProfile.js, Home.js, Profie.js 생성 후 값 입력
componets - App.js 이하여 import문 수정

npm install react-router-dom 설치


## [2022.03.23]

Git fata: bad boolean config value 'ture' for 'cire,ayticuf' 에러 노출
Git, nodejs 재설치 후 진행 -> node js 에러 노출로 진행 불가

### 개인 노트북으로 Github 레포지토리 초기화, PUSH동작 확인
  1. git init
  2. git config user.name "2JONGCHUL"
  3. git config user.email "qjwrhc15@naver.com"
  4. git remote add origin "https://github.com/2JONGCHUL/nwitter.git"
  5. git add .
  6. git commit -m "init git"
  7. git push -u origin master
 상기 순서로 명령어 입력후 Github PUSH 동작 정상 확인

### 정상동작
## 602277124 이종철

+ 파이어베이스 서비스의 종류 및 특징

```
\*원격 구성(Remote Config)
앱을 업그레이드하지 않고도 여러분이 만든 앱의 동작이나 보이는 모습을 동적으로 변경할 수 있습니다

인앱 메시징(In-App Messaging)
사용자들에게 맞춤화 된 타깃 메시지를 보여줘서 그들로 하여금 여러분이 만든 앱의 핵심 기능들을 사용해 볼 수 있도록 도와줍니다

클라우드 메시징(Cloud Messaging)
여러분의 앱을 사용하는 사람들이나 앱에서 무언가 흥미로운 일이 생겼을 때 푸시(push) 메시지를 전달할 수 있습니다. 
```

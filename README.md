# 602277124 이종철

## [2022.04.06]
### react-router-dom 설치, 라우터 설정하기
> npm i react-router-dom@5.2.0
> 
### 파이어 베이스 로그인 준비
jsconfig.js 파일 생성 및 작성

firebase.js 파일 이름 변경
firebase.js > fbase.js

## fbase 변경후 에러 해결방법 ../src/fbase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


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

# 템플릿 서버 프로토타이핑

UI를 위한 템플릿 서버와 이를 이용하는 웹서버의 프로토타이핑 작업물입니다.

요구사항:

* Node.js v8


설치/실행:

```bash
npm i 
npm run tpl
npm run web
```

데모:

```bash
curl -vs localhost:3000/main
```

* 정적 리소스(css, js) 주소가 포함된 hbs 템플릿 문자열을 응답합니다 

```bash
curl -vs localhost:3001/main
```

* 템플릿 서버로부터 받은 템플릿에 데이터를 합쳐서 만든 html을 응답합니다 

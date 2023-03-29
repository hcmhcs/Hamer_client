<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
## 3/25

### 함수형 컴포넌트와 클래스형 컴포넌트 차이점

- 하루 홈페이지 구조짜기, api 짜기, model 짜기

/ ->homepage
/login
/join
/mypage
/admin
/history

/freeboard

/notice
/notice/create

/user

## 오류

(3/27) /notice/create에 들어갔을때 해머로고가 안먹음
예상이유는 route중첩에 의한 거 같은데 해결법을 모르겠음

(3/28) 로그인하면 App.js에 있는 useState login값을 변경해주는데 잘안먹는다
-> localStorage에 저장해서 만들기(서버에서 준 토큰을 localStorage에 저장하기)

## 해야할것

1. admin으로 로그인했을때만 admin사이트가 보이도록 설정
2. 로그인 구현 로그인상태 유지
3. admin에서 x버튼 눌렀을때 삭제되도록
4. 로그인 post하면 게정확인 인증하기
5. 게시판 css 바꾸기 https://tworab.tistory.com/79

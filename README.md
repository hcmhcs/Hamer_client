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
3/31(금) 서버에 get,post를 요청하 getData 함수를 useEffect를 사용하고
그 안에 setState()를 한 후에 종속성 배열로 useState를 넣으면 get요청이 무한루프 됨
->해결
-> getData를 하는 useEffect는 빈 종속성배열, 그 아래에 아무함수 없이 [posts] 종속성배열로 2개 처리하기

- 이유
  종속 항목으로 [data]를 전달하면 다음과 같은 일이 발생합니다.

1. 구성 요소가 마운트되고 useEffect 후크가 처음으로 실행됩니다.
2. API에서 데이터를 가져오기 위해 fetch 함수가 호출됩니다.
3. 'fetch' 함수는 데이터로 해결된 약속을 반환합니다.
4. data 상태를 업데이트하는 새 데이터로 setData 함수가 호출됩니다.
5. data 상태가 변경되었으므로 구성 요소가 다시 렌더링됩니다.
6. data 종속성이 변경되었기 때문에 useEffect 후크가 다시 실행됩니다.
7. API에서 데이터를 가져오기 위해 fetch 함수가 다시 호출됩니다.
8. 'fetch' 함수는 데이터로 해결된 약속을 반환합니다.
9. data 상태를 업데이트하는 새 데이터로 setData 함수가 다시 호출됩니다.
10. 'data' 상태가 변경되었기 때문에 구성 요소가 다시 렌더링됩니다.
    6-10단계가 무한 반복되어 무한 루프가 발생합니다.
    4/1(토)

## 해야할것

2. 로그인 구현 로그인상태 유지
   -> localStorage 로 구현 session으로 바꿔야됨
3. 로그인 post하면 게정확인 인증하기
   -> 서버쪽에 로그인 인증 좀더 자세히하기
4. 게시판 css 바꾸기 https://tworab.tistory.com/79
5. admin css 꾸미기
6. 지금 join에서 password 다른지 확인하는게 잘못됨
7. 글쓰기 삭제할때 권한없음

## 아이디어

1. 등급을 나눠서 글올리고 뭐하면 경험치를 줘서 등급업해주기
   //react-bootstrap의 badge
2.

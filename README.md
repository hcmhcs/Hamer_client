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

1. 임원으로 승인해주는 절차 생각하기
2. 로그인 구현 로그인상태 유지
   -> localStorage 로 구현 session으로 바꿔야됨, 자동로그인 추가
   -> https://jrepository.tistory.com/m/65 (리액트쪽)
3. 로그인 post하면 게정확인 인증하기
   -> 서버쪽에 로그인 인증 좀더 자세히하기
4. 게시판 css 바꾸기 https://tworab.tistory.com/79
5. admin css 꾸미기
6. admin페이지 삭제후 재랜더링안되는거 고치기
7. 글쓰고 지은이가 학번으로 할지 이름으로 할지 제대로 맞추기

가장 중요한거 : 리팩토링 기간 갖기

## 아이디어

1. 등급을 나눠서 글올리고 뭐하면 경험치를 줘서 등급업해주기
   //react-bootstrap의 badge
2. 일정
3. 실시간 동방에 누구 있는지 (센서 혹은 수동등록)
4. 게임

5/3
우선 detail_page이름을 List_page로 변경하고 detail페이지 제작하기
이에 관한 백엔드 구성하기
동적라우팅공부하기
참고사이트:https://velog.io/@zzangzzong/React-%EB%8F%99%EC%A0%81%EB%9D%BC%EC%9A%B0%ED%8C%85Dynamic-Routing
이때 useParams를 이용해서 params를 가져올수있다.

년도별 main페이지가 필요 그니까 2022년도 behinds면 2022 behind 라우팅 페이지가 필요
5/5(금)
해머 역사 삭제기능까지 추가완료
이 페이지 용도를 다시한번 생각해보고 필요하거나 뺄 기능생각해야됨.
비슷한거 확인한 거 한 컴포넌트로 통일시켜보기

지금 공지사항이 일반회원도 적을 수 있으니까 다시 관리자만 적을수있게 바꾸고
프리보드 페이지도 만들기 거기는 일반 사용자 모두 적을 수 있도록

그리고 페이지 여러개일때 어떻게 관리할지 생각하는게 다음단계

이후에 추가기능들 넣을 예정

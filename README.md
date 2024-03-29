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

## 5.17(화)

1. freeboard만들기 (o)
2. notice를 임원만 올릴수있도록하기(o)

이후에 freeboard 목록 등 이런거 처리(o)

3. 인증관련 비밀번호 암호화(o)
4. 세션처리
5. admin페이지에서 삭제되고 재랜더링되도록

6. notice 라우터 /\* 에서 /:id로 바꿨으니 그 params를 이용하도록 리팩토링
7. 지금 catch로 에러처리했으면 status 코드 에러인부분을 catch쪽으로 옮겨야됨.(개중요)

## 5.18(목)

- 완료한거
  freeboard 페이지
  notice 임원만 올리고 작성자는 관리자로 통일,삭제는 임원이면 다가능
  freeboard은 adminpage에서 임원이 다른회원꺼 삭제가능
  status code 400대면 catch(err)에서 err로 가니까 400대의 어떻게 처리할것은 err에서 해야됨(err.response.status 혹은 err.response.data)

-해야될것

1. 나머지 catch(Err)쓰인곳에 status code에 맞게 처리하기
2. notice에서 /:id를 이용하기 지금은 주소에서 split,pop이런걸로 따오니까 이거 리팩토링
3. search 기능구현하기
4. session 부분 -이후에 할것
5. 글많아졌을때의 목록 처리는 이후
6. 관리자 권한주기나 삭제할때 확인창 (confirm 기능추가하기)

- admin에서 자유게시판 목록 정리해서 나오도록하기

6. css꾸미기

## 5.22(월)

- 추가할 기능

1. search 기능
2. session cookie 사용
3. 댓글.좋아요 추가하기
   -> 공지사항과 다르게 모델 새로 나누는게 좋을듯
4. 유저별 글 갯수,댓글갯수 좋아요 갯수 추가하기
5. 글많아졌을때 아래로 스크롤 되게 프론트 처리

- 고쳐야될점(리팩토링)

1. catch(err) 부분에서 status code 400,500대 처리하게 바꾸기 지금은 try 부분에서 처리할려고함
2. notice /:id 이용하기 지금은 주소창에서 \_id를 어거지로 따옴(현재는 split,pop 이런걸)

- 에러부분

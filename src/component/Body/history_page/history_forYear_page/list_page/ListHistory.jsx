import Button from "react-bootstrap/Button";
import History from "./History";
function ListHistory({ adminStatus, historys }) {
  const year = window.location.pathname.split("/").pop();

  return (
    <>
      {/* {adminStatus && <h1>{year}년도 임원진 비하인드</h1>} */}
      {!adminStatus && <h1>{year}년도 역사</h1>}
      <div style={{ padding: "10 20px" }}>
        <table>
          <colgroup>
            <col width="15%" />
            <col width="50%" />
            <col width="20%" />
            <col width="*" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일시</th>
              {/* <th>조회수</th> */}
            </tr>
          </thead>
          <tbody>
            {historys?.map((history, index) => (
              <History history={history} key={index} num={index} />
            ))}
          </tbody>
        </table>
      </div>
      {adminStatus && (
        <Button
          onClick={() => {
            window.location.href = year + "/create";
          }}
          variant="primary"
          size="sm"
        >
          글생성
        </Button>
      )}
      <Button
        onClick={() => {
          window.location.href = "/history";
        }}
        variant="primary"
        size="sm"
      >
        뒤로가기
      </Button>{" "}
    </>
  );
}

export default ListHistory;

import Button from "react-bootstrap/Button";

function DetailHistory({ adminStatus }) {
  const year = window.location.pathname.split("/").pop();

  return (
    <>
      {adminStatus && <h1>{year}년도 임원진 비하인드</h1>}
      {!adminStatus && <h1>{year}년도 역사</h1>}
      {adminStatus && (
        <Button
          onClick={() => {
            window.location.href = "create/" + year;
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

export default DetailHistory;

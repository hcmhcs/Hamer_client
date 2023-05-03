import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "./ListGroupItem";

function AllHistory({ movePage, moveAdminPage, adminStatus }) {
  return (
    <>
      <h1>해머의 역사페이지</h1>
      <h3>해머란? </h3>
      <a>
        - HaMer는 Hacking Merits(해킹의 진수)의 약자로, 해킹을 좋아하고 같이
        공부하려는 학생들이 모인 소학회입니다. 사이버보안학과 산하의 소학회로서,
        저희 소학회의 목적과 취지는 사이버보안학과, 소프트웨어학과 등 IT에
        관심이 있는 학생들의 프로그래밍적 능력을 향상시켜 훌륭한 프로그래머로
        성장하고자 하며, 진입장벽이 높은 사이버 보안 공부를 함께하며, 각종
        사이버보안 대응 능력 성장에 힘쓰는 동시에 학생들의 단합 등을 통한
        대학생활을 전반적으로 적응하도록 돕는데 있습니다.
      </a>
      <br />
      <h2>년도별 해머의 행적</h2>
      <ListGroup horizontal>
        <ListGroupItem movePage={movePage} year="2018" />
        <ListGroupItem movePage={movePage} year="2019" />
        <ListGroupItem movePage={movePage} year="2020" />
        <ListGroupItem movePage={movePage} year="2021" />
        <ListGroupItem movePage={movePage} year="2022" />
        <ListGroupItem movePage={movePage} year="2023" />
      </ListGroup>
      <br />
      <br />
      <br />
      <br />
      <hr />
      {adminStatus && (
        <>
          <h2>임원진 전용 해머의 비하인드</h2>
          <ListGroup horizontal>
            <ListGroupItem movePage={moveAdminPage} year="2018" />
            <ListGroupItem movePage={moveAdminPage} year="2019" />
            <ListGroupItem movePage={moveAdminPage} year="2020" />
            <ListGroupItem movePage={moveAdminPage} year="2021" />
            <ListGroupItem movePage={moveAdminPage} year="2022" />
            <ListGroupItem movePage={moveAdminPage} year="2023" />
          </ListGroup>
        </>
      )}
    </>
  );
}

export default AllHistory;

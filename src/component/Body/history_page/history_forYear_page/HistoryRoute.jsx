import { Outlet, Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ListHistory from "./list_page/ListHistory";
import CreateHistory from "./create_page/CreateHistory";
import DetailHistory from "./detail_page/DetailHistory";
import axios from "axios";
function HistoryRoute({ adminStatus }) {
  const year = useParams().year;
  // const year = params.year;
  const [historys, setHistorys] = useState(null);
  const url = "http://localhost:4000/history/" + year;
  async function getHistory() {
    await axios
      .get(url)
      .then((response) => {
        setHistorys(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    getHistory();
  }, []);
  useEffect(() => {}, [historys]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ListHistory adminStatus={adminStatus} historys={historys} />
          }
        />
        <Route path="/create" element={<CreateHistory />} />
        <Route
          path="/:id"
          element={
            <DetailHistory adminStatus={adminStatus} historys={historys} />
          }
        />
      </Routes>
      <Outlet />
    </>
  );
}
export default HistoryRoute;

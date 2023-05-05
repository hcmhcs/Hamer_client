import { Outlet, Route, Routes } from "react-router-dom";
import Empty from "../../empty_page/Empty";
import react, { useParams, useState, useEffect } from "react";
import ListHistory from "./list_page/ListHistory";
import CreateHistory from "./create_page/CreateHistory";
import DetailHistory from "./detail_page/DetailHistory";
import axios from "axios";
function HistoryRoute() {
  const year = window.location.pathname.split("/").pop();
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
        <Route path="/" element={<ListHistory historys={historys} />} />
        <Route path="/create" element={<CreateHistory />} />
        <Route path="/:id" element={<DetailHistory historys={historys} />} />
      </Routes>
      <Outlet />
    </>
  );
}
export default HistoryRoute;

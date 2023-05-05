import { Outlet, Route, Routes } from "react-router-dom";
import Empty from "../../empty_page/Empty";
import CreateBehind from "./create_page/CreateBehind";
import DetailBehind from "./detail_page/DetailBehind";
import ListBehind from "./list_page/ListBehind";
import react, { useParams, useState, useEffect } from "react";
import axios from "axios";
function BehindRoute() {
  const year = window.location.pathname.split("/").pop();
  const [behinds, setBehinds] = useState(null);
  const url = "http://localhost:4000/history/admin/" + year;
  async function getBehind() {
    await axios
      .get(url)
      .then((response) => {
        setBehinds(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    getBehind();
  }, []);
  useEffect(() => {}, [behinds]);
  return (
    <>
      <Routes>
        <Route path="/" element={<ListBehind behinds={behinds} />} />
        <Route path="/create" element={<CreateBehind />} />
        <Route path="/:id" element={<DetailBehind behinds={behinds} />} />
      </Routes>
      <Outlet />
    </>
  );
}
export default BehindRoute;

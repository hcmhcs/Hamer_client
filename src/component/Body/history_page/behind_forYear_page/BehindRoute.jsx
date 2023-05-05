import { Outlet, Route, Routes, useParams } from "react-router-dom";
import CreateBehind from "./create_page/CreateBehind";
import DetailBehind from "./detail_page/DetailBehind";
import ListBehind from "./list_page/ListBehind";
import { useState, useEffect } from "react";
import axios from "axios";
function BehindRoute({ adminStatus }) {
  const year = useParams().year;
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
        <Route
          path="/"
          element={<ListBehind adminStatus={adminStatus} behinds={behinds} />}
        />
        <Route
          path="/create"
          element={<CreateBehind adminStatus={adminStatus} />}
        />
        <Route
          path="/:id"
          element={<DetailBehind adminStatus={adminStatus} behinds={behinds} />}
        />
      </Routes>
      <Outlet />
    </>
  );
}
export default BehindRoute;

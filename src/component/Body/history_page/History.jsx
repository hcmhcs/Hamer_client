// eslint-disable-next-line

import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AllHistory from "./main_page/AllHistory";
import HistoryRoute from "./history_forYear_page/HistoryRoute";
import BehindRoute from "./behind_forYear_page/BehindRoute";

function History({ adminStatus, name }) {
  const movePage = (e) => {
    const year = e.target.innerText;
    window.location.href = "/history/" + year;
  };
  const moveAdminPage = (e) => {
    const year = e.target.innerText;
    window.location.href = "/history/admin/" + year;
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AllHistory
              adminStatus={adminStatus}
              movePage={movePage}
              moveAdminPage={moveAdminPage}
            />
          }
        />
        <Route
          path="/admin/:year/*"
          element={<BehindRoute adminStatus={adminStatus} />}
        />
        <Route
          path="/:year/*"
          element={<HistoryRoute adminStatus={adminStatus} />}
        />
        {/* 여기서 behind를 재요청할수있지만 behind의 라우팅페이지를 따로만들면 
        list behind에서와 detailbehind에서 각각 요청할 필요없이 한번 라우팅페이지에서
        요청한 behinds를 전달해주면 된다. */}
      </Routes>
      <Outlet />
    </>
  );
}

export default History;

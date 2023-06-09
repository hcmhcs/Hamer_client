// eslint-disable-next-line

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Body/home_page/Home";
import LoginForm from "./component/Body/login_page/LoginForm";
import JoinForm from "./component/Body/join_page/JoinForm";
import Notice from "./component/Body/notice_page/Notice";
import Mypage from "./component/Body/mypage_page/Mypage";
import History from "./component/Body/history_page/History";
import FreeBoard from "./component/Body/freeboard_page/FreeBoard";
import Changmin from "./component/Body/changmin_page/Changmin";
import AdminRouter from "./component/Body/admin_page/AdminRouter";
function Body({ user }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/join" element={<JoinForm />} />
        <Route
          path="/notice/*"
          element={<Notice name={user?.name} adminStatus={user?.adminStatus} />}
        />
        <Route path="/freeboard/*" element={<FreeBoard name={user?.name} />} />
        <Route
          path="/history/*"
          element={
            <History name={user?.name} adminStatus={user?.adminStatus} />
          }
        />
        <Route path="/mypage" element={<Mypage user={user} />} />
        <Route path="/admin/*" element={<AdminRouter user={user} />} />

        <Route path="/:name" element={<Changmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Body;

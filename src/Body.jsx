import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import LoginForm from "./component/LoginForm";
import JoinForm from "./component/JoinForm";
import Empty from "./component/Empty";
import Admin from "./component/Admin";
import Notice from "./component/Notice";
function Body() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/join" element={<JoinForm />} />
        <Route path="/notice/*" element={<Notice />} />
        <Route path="/freeboard" element={<Empty title="freeboard" />} />
        <Route path="/history" element={<Empty title="해머의 역사" />} />
        <Route path="/mypage" element={<Empty title="mypage" />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Body;

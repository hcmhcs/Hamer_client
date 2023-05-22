import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Admin from "./main_page/Admin";
import AdminMore from "./hiden_page/AdminMore";

function AdminRouter({ user }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin user={user} />} />
        <Route path="/more" element={<AdminMore userMe={user} />} />
      </Routes>
      <Outlet />
    </>
  );
}
export default AdminRouter;

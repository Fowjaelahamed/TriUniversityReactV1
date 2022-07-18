import React from "react";
import "../styles.css";
import Topbar from "./Topbar";
import Search from "./Search";
import Menubar from "./Menubar";
import {useLocation} from "react-router-dom";
function Header() {
  let location = useLocation();
  if (location.pathname === "/student/student-login") {
    return <></>;
  }
  return (
    <>
      <Topbar />
      <Search />
      <Menubar />
    </>
  );
}
export default Header;

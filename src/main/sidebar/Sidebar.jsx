import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaThList, FaCalendarAlt } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  width: 15%;
`;

const Menu = styled.div`
  margin-top: 15px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

function Sidebar() {
  const menus = [
    { name: "홈", path: "/", img: <BsHouseDoorFill /> },
    { name: "미션", path: "/mission", img: <FaThList /> },
    { name: "캘린더", path: "/calendar", img: <FaCalendarAlt /> },
    { name: "갤러리", path: "/gallery", img: <GrGallery /> },
  ];
  return (
    <Side id="sidebar">
      {/* <Dropdown /> */}
      <div className='round-div'><h6 style={{marginTop:'10px'}}>1003호</h6></div>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{ color: "gray", textDecoration: "none" }}
              to={menu.path}
              key={index}
              img={menu.img}
              activeStyle={{ color: "black" }}
            >
              <SidebarItem menu={menu} />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;

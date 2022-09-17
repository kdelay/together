import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import Dropdown from './Dropdown';
// import profile from "../img/togetherLogo.png";
import {BsHouseDoorFill} from 'react-icons/bs';
import {FaThList} from 'react-icons/fa';
import {FaCalendarAlt} from 'react-icons/fa';
import {GrGallery} from 'react-icons/gr'
import {MdGroup} from 'react-icons/md'

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
//   justify-content: center;
  width: 15%;
//   height: 1000px;
`;
// const Profile = styled.img`
//   display: flex;
//   width: 150px;
//   height: 150px;
//   border-radius: 100%;
// `;


const Menu = styled.div`
  margin-top: 15px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

function Sidebar() {
  const menus = [
    { name: "홈", path: "/", img: <BsHouseDoorFill/>},
    { name: "미션", path: "/mission", img: <FaThList/> },
    { name: "캘린더", path: "/calendar", img: <FaCalendarAlt/> },
    { name: "갤러리", path: "/gallery", img: <GrGallery/> },
    { name: "그룹원", path: "/group", img: <MdGroup/> },
  ];
  return (
    <Side>
        <Dropdown/>
      {/* <Profile src={profile}></Profile> */}
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

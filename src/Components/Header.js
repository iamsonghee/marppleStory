import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { LOGO_IMAGE } from "../config";

import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";

function Header(props) {
  console.log(props);

  const moveToMenu = (path) => {
    props.history.push(`${path}`);
  };

  return (
    <>
      <Nav>
        <Logo src={LOGO_IMAGE} />
        <Menu>
          <LMenu>
            {menuItems.map((item, index) => {
              return (
                <li key={index} onClick={() => moveToMenu(item.path)}>
                  {item.name}
                </li>
              );
            })}
          </LMenu>
          <span>|</span>
          <RMenu>
            {menuItemsCustom.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
          </RMenu>
          <UMenu>
            <AiOutlineUser />
            <AiOutlineHeart />
            <AiOutlineShopping />
          </UMenu>
        </Menu>
      </Nav>
    </>
  );
}

export default withRouter(Header);

const Nav = styled.nav`
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: space-between;
  padding: 0px 5%;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 60%;
  font-size: 16px;
  font-weight: 500;
`;
const Logo = styled.img`
  width: 180px;
  object-fit: contain;
`;

const LMenu = styled.ul`
  display: flex;
  li {
    padding-right: 45px;
  }
`;
const RMenu = styled.ul`
  display: flex;
  li {
    padding-left: 45px;
    &:last-child {
      padding-right: 25px;
    }
  }
`;
const UMenu = styled.div`
  svg {
    margin-left: 20px;
    font-size: 25px;
  }
`;
const menuItems = [
  { name: "상품만들기", path: "/" },
  { name: "폰케이스", path: "/phonecase" },
  { name: "단체주문", path: "/" },
];

const menuItemsCustom = [
  { name: "리뷰", path: "/" },
  { name: "고객센터", path: "/phonecase" },
];

import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button } from "antd";
import { AlignRightOutlined } from "@ant-design/icons";
import "./Sections/Navbar.css";

function NavBar() {
  const [visible, setvisible] = useState(false);

  const showDrawer = () => {
    setvisible(true);
  };

  const onClose = () => {
    setvisible(false);
  };

  return (
    <nav className="menu">
      <div className="menu-logo">
        <a href="/">Logo</a>
      </div>
      <div className="menu__container">
        <div className="menu__left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu__right">
          <RightMenu mode="horizontal" />
        </div>
        <Button className="menu_mobile-btn" type="primary" onClick={showDrawer}>
          <AlignRightOutlined type="align-right" />
        </Button>
        <Drawer
          className="menu_drawer"
          title="Basic Drawer"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;

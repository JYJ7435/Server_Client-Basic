import React from "react";
import { SmileOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p style={{ textAlign: "center" }}>
        Frontend Developer JangYoungJu Page <br /> Happy Coding
        <SmileOutlined style={{ paddingLeft: "10px" }} />
      </p>
    </div>
  );
}

export default Footer;

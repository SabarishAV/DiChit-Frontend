import React from "react";
import TemporaryDrawer from "../../components/SideBar";
import { Button } from "@mui/material";
import ChitBox from "../../components/ChitBox";
import "../../components/ChitBox/Chitbox.css";

const UserHome = () => {
  return (
    <div
      className="userhome"
      style={{ width: "100%", display: "flex", flexWrap: "wrap" }}
    >
      <TemporaryDrawer />
      <div style={{ marginTop: "4rem", flex: 1, padding: "2.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 className="text-2xl font-bold font-sans">Your Chits</h1>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Button
              style={{
                background: "blue",
                color: "white",
                borderRadius: "5px",
                height: "2rem",
                width: "6rem",
                textTransform: "none",
              }}
              onClick={() => console.log("Filter Clicked")}
            >
              Filter
            </Button>
            <Button
              style={{
                background: "green",
                color: "white",
                borderRadius: "5px",
                height: "2rem",
                width: "6rem",
                textTransform: "none",
              }}
              onClick={() => console.log("Chit Clicked")}
            >
              Add Chit
            </Button>
          </div>
        </div>
        <div
        
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBlock: "1rem",
          }}
        >
          <div style={{ width: "100%" }}>
            <ChitBox />
            <ChitBox />
            <ChitBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;

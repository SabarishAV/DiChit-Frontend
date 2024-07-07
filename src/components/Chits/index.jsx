import { Button } from "@mui/material";
import React from "react";

const ChitList = () => {
  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <p>All Chits</p>
        <Button
          style={{
            background: "blue",
            color: "white",
            borderRadius: "5rem",
            width: "70%",
            textTransform: "none",
          }}
          onClick={() => console.log("Clicked")}
        >
          Filter
        </Button>
      </div>
    </>
  );
};

export default ChitList;

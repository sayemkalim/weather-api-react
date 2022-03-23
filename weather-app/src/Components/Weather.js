import React from "react";
import Box from "@mui/material/Box";
import Image from './Image.jpeg'
const Weather = () => {
  return (
    <>
      <Box
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          width: "65%",
          margin: "0 auto",
          background: "linear-gradient(to right, 	#800080, #e67e22)",
         
        }}
      >
        <Box
          style={{
            width: "47%",
            height: "80%",
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            borderRadius: "20px 0 0 20px",
          }}
        >
          s
        </Box>
        <Box
          style={{
            width: "73%",
            height: "80%",
            background: "linear-gradient(to right, #e74c3c, #e67e22)",
          }}
        >
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Weather;

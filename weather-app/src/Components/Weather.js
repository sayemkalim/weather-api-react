import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import Image from "./Image.jpeg";
import { getData } from "../Service/Api";

const Weather = () => {
 
 useEffect(() =>{
  getData().then( data =>{
    console.log(data);
  })
  },[]);
  
  return (
    <>
      <Box
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          width: "65%",
          margin: "0 auto",
          background: "linear-gradient(to right, 	purple , #e67e22)",
          borderRadius: "30px 30px 30px 30px",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "80%",
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            borderRadius: "20px 0 0 20px",
          }}
        ></Box>
        <Box
          style={{
            width: "100%",
            height: "80%",
            background: "linear-gradient(to right, red, purple)",
            borderRadius: "0 20px 20px 0px",
          }}
        >
          <form
            style={{
              padding: 15,
              display: "flex",
              marginRight: 0,
              marginLeft: 0,
              marginTop: 10,
              fontSize: 20,
              color: "#fff",
            }}
          >
            <TextField
              id="standard-basic"
              label="City"
              variant="standard"
              style={{
                marginRight: 20,
              }}
            />

            <TextField
              id="standard-basic"
              label="Country"
              variant="standard"
              style={{
                marginleft: 20,
              }}
            />

            <Button variant="Contained">Search</Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Weather;

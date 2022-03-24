import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import Image from "./Image.jpeg";
import { getData } from "../Service/Api";
import Information from "./Information";

const Weather = () => {
  const [data, setData] = useState([]);
  const [city,setCity]= useState('');
  const [country,setCountry]= useState('');
  const [ click, handleClick ] = useState(false);

  useEffect(() => {
  const getWeather = async () => {
    getData(city,country).then((response) => {
      setData(response.data);
    });
  };
 
    getWeather();
    handleClick(false);
  }, [click]);

 const handleCityChange = (value) =>{
   setCity(value);
 }
 const handleCountryChange = (value) =>{
  setCountry(value);
}

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
            onChange={(e)=>handleCityChange(e.target.value)}
              id="standard-basic"
              label="City"
              variant="standard"
              style={{
                marginRight: 20,
              }}
            />

            <TextField
              onChange={(e)=>handleCountryChange(e.target.value)}
              id="standard-basic"
              label="Country"
              variant="standard"
              style={{
                marginleft: 20,
              }}
            />

            <Button variant="Contained"
            onClick={() => handleClick(true)}
            >Search</Button>
          </form>
          <Information data={data} />
        </Box>
      </Box>
      )
    </>
  );
};

export default Weather;

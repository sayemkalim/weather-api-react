import {Box, Typography,}  from "@mui/material";

const Information = ({data}) => {

    
  return (
      data.length===0 ?
      <h1></h1>
   :<Box>
     
   <Typography>Temprature  {data.main.temp}</Typography>
   <Typography> Feels Like - {data.mainfeels_like}</Typography>
   <Typography>Humidity  {data.main.humidity}%</Typography>
   <Typography>Humidity  {data.name}</Typography>
   <Typography>Speed  {data.wind.speed}</Typography>
   <Typography>Sunset  {data.sys.sunset}</Typography>
   <Typography>Timezone  {data.timezone}</Typography>
 
   
</Box>
  )
}

export default Information;
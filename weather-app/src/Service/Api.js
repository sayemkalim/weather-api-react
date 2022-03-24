import axios from 'axios';
  
const URL ='https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '819551c0047398b51997297649bd9976';
export const getData =async(city,country)=>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}
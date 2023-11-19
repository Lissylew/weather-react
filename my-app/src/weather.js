import React from "react";
import axios from "axios";

export default function Weather(props){
    function handleResponse (response) {
        alert(`weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=8c78e9e7e9928cd1a2a6f923072c3dec&units=metric`;
axios.get(apiUrl).then(handleResponse);
       return (
    <div>
    <h2>Hello from Weather</h2>
    
    </div>
    );
}

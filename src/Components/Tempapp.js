import React, {useState,useEffect} from "react";
import "./css/style.css";

const Tempapp = () => {
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Patna");

    useEffect(() => {
        const fetchApi = async()=>{
            const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=731295ed5ce209ee317c1804ee898052`
            const response= await fetch(url);
            const resJson= await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
    
    return (
        <div className="main">
            <div className="box">
                <div className="inputdata">
                <i className="fas fa-search-location"></i>
                    <input type="search" placeholder="Enter Your City" className="inputfield"
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }} />
                </div>
        {!city ? (
            <p className="temp">No Data</p>
        ):
        
                <div className="info">
                    <i class="fas fa-cloud-moon"></i>
                    <div className="loc">
                    <i className="fas fa-map-marker-alt"></i>
                    <h2 className="location">{search}</h2>
                    </div>

                    <h1 className="temp">{city.temp}°C</h1>

                    <div className="extrainfo">
                        <div>
                            <div className="extra">
                        <i class="fas fa-sort-amount-up-alt iconedit"></i>
                    <h3 className="mintemp">Min: {city.temp_min}°C</h3>
                    </div>
                    <div className="extra">
                    <i class="fas fa-sort-amount-up iconedit"></i>
                    <h3 className="mantemp">Max: {city.temp_max}°C</h3>
                    </div>
                    </div>

                    <div>
                    <div className="extra">
                    <i class="fas fa-cloud iconedit"></i>
                    <h3 className="pre">Pressure: {city.pressure}Pa</h3>
                    </div>
                    <div className="extra">
                    <i class="fas fa-wind iconedit"></i>
                    <h3 className="hum">Humidity: {city.humidity}g/Kg</h3>
                    </div>
                    </div>

                    </div>
                </div>
            }
            </div>
        </div>
    )
}

export default Tempapp;
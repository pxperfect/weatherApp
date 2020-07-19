import React from "react";
import { useState, useContext } from 'react';
import { WeatherContext } from "../context/GlobalState";
import CoordsService from "../services/CoordsService";
import WeatherService from "../services/WeatherService";

const SearchComponent = () => {
    const [locationName, setLocationName] = useState('');
    const [context, setContext] = useContext(WeatherContext);

    const updateLocationName = (event) => {
        setLocationName(event.target.value);
    };

    const getLocationWeather = async (e) => {
        e.preventDefault();
        setContext(prev => {
            return {...prev, weather: null, loading: true}
        });
        const coords = await CoordsService.getCityCoords(locationName);
        const weather = await WeatherService.getWeather(coords);
        setContext(prev => {
            return {...prev, weather: weather, loading: false}
        });
    };

    return (
        <form onSubmit={getLocationWeather}>
            <input
                type="text"
                name="locationName"
                placeholder="Your city here..."
                value={ locationName }
                onChange={ updateLocationName }/>
            <button>View weather</button>
        </form>
    )
};

export default SearchComponent;

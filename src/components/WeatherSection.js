import React, {useContext, useEffect, useState, useReducer} from "react";
import { coordsReducer} from "../context/reducers";
import {WeatherContext} from "../context/GlobalState";
// Serviced.
import CoordsService from "../services/CoordsService";
import WeatherService from "../services/WeatherService";

const WeatherSection = () => {
    const [context, setContext] = useContext(WeatherContext);

    useEffect(() => {
        async function geolocationCall() {
            const deviceCoords = await CoordsService.getUserDeviceCoords();
            const weather = await WeatherService.getWeather(deviceCoords);
            setContext(prev => {
                return {...prev, weather: weather, loading: false}
            });
        }
        geolocationCall();
    }, []);

    return (
        <div>
            { context.loading ? <div>Loading Spinner</div> : null }
            <p>{context.weather ? JSON.stringify(context.weather) : null}</p>
        </div>
    )
};

export default WeatherSection;
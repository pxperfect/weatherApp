import React, {useState, createContext, useReducer} from "react";
import { coordsReducer } from "./reducers";

export const WeatherContext = createContext();

export const GlobalState = (props) => {
    const [context, setContext] = useState({
        cityCoords: null,
        loading: true,
        weather: null
    });

    return (
        <WeatherContext.Provider value={ [context, setContext] }>
            {props.children}
        </WeatherContext.Provider>
    )
};
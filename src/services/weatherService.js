class WeatherService {
    static async getWeather(coords) {
        const apiKey = '5da551d331a62c0917c2893442333571';
        const url = 'http://api.openweathermap.org/data/2.5/onecall?';
        const params = `lat=${coords.latitude}&lon=${coords.longitude}&exclude=hourly,daily&appid=${apiKey}`;
        const data = await fetch(url + params);
        return data.json();
    }
}

export default WeatherService;
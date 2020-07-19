const express = require('express');
const axios = require('axios').default;

const app = express();
const port = 5151;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/api', (req, res) => {
    console.log('ok');
    const key = 'a4d09056d33653cdd7fd544c0719e997';
    const url = `https://api.positionstack.com/v1/forward?access_key=${key}&query=1600 Pennsylvania Ave NW, Washington DC`;
    // console.log(url + `&query=40.7638435,-73.9729691`);
    axios(url)
        .then(response => {
            console.log(response.data);
        })
        .catch(e => {
            console.log(e)
        })
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// const apiKey = '5da551d331a62c0917c2893442333571';
// const corsProxyAddress = 'https://cors-anywhere.herokuapp.com/';
// const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&
// exclude=hourly,daily&appid={${apiKey}}`;
// const data = fetch(corsProxyAddress + apiUrl);
// console.log(data);
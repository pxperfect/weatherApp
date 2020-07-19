const key = 'a4d09056d33653cdd7fd544c0719e997';

class CoordsService {
     static async getCityCoords(cityName) {
        try {
            const response = await fetch(`http://api.positionstack.com/v1/forward?access_key=${key}&query=${cityName}`);
            const jsonResponse = await response.json();
            const { latitude, longitude } = jsonResponse.data[0];
            return { latitude, longitude }
        } catch (e) {
            console.error(e);
            return e;
        }
    }
    static async getUserDeviceCoords() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                });
            } else {
                reject('Geolocation failed.');
            }
        })
    };
}

export default CoordsService;

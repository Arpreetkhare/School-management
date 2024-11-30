const geolib = require('geolib');


function calculateDistance(lat1, lon1, lat2, lon2) {
    const distance = geolib.getDistance(
        { latitude: lat1, longitude: lon1 },
        { latitude: lat2, longitude: lon2 }
    );
    return distance/1000; 
}


module.exports = {calculateDistance};
const nodeGeocoder = require('node-geocoder');

const options = {
    provider: 'mapquest',
    httpAdapter: 'https',
    apiKey: '83CaGPVHMZXBzCWzIUAerLGytMKjg6wi',
    formatter:null
};

const geocoder = nodeGeocoder(options);
module.exports = geocoder;

const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request(
    {
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true,
    },
    (error, response, body) => {
      if (error) {
        callback('Unable to connect to Google Server');
      } else if (body.status === 'ZERO_RESULT') {
       callback('Unable to find that address');
      } else if (body.status === 'OK') {
          callback(undefined, {
              address: body.results[0].formatter_address,
              latitude: body.results[0].geometry.location.lat,
              longitude: body.results[0].geometry.location.lng
          })
      }
    },
  );
};

module.exports.geocodeAddress = geocodeAddress;

// e0cb5ea5ef088f26ee2eaa93cb1d2686


const request = require('request');

var getWeather = (lat, lng, callback) => {
  request(
    {
      url:
        `https://api.darksky.net/forecast/e0cb5ea5ef088f26ee2eaa93cb1d2686/${lat},${lng}`,
      json: true,
    },
    (error, response, body) => {
      if (error) {
        callback('Unable to connect to Forecast.io server.');
      } else if (response.statusCode === 400) {
        callback(response.statusCode === 200);
      } else if (response.statusCode === 200) {
          callback(undefined, {
              temperature: body.currently.temperature,
              apparentTemperature: body.currently.apparentTemperature
          })
      }
    },
  );
};

module.exports.getWeather = getWeather;

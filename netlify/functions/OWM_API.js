// Install dependencies
const axios = require("axios");

// Make an API call to OpenWeatherMap and finally return the data
exports.handler = async function (event, context) {

    const city = event.queryStringParameters.city;

    const API_KEY = process.env.OWM_API_KEY;

    // If city is not given or it is not found
    if (!city) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "City parameter not found." })
        };
    }

    // OpenWeatherMap API call
    try {
        const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    q: city,
                    units: "metric",
                    mode: "json",
                    APPID: API_KEY
                }

            }

        );
        // If OK, return the data
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };

        // If there was an error in the try-block:    
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "API request failed." })
        };
    }
};


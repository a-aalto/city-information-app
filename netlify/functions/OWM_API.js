const axios = require("axios");

exports.handler = async function (event, context) {

    const city = event.queryStringParameters.city;

    const API_KEY = process.env.OWM_API_KEY;

    if (!city) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "City parameter not found." })
        };
    }

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

        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };


    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "API request failed." })
        };
    }
};


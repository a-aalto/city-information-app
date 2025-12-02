const OWM_API_KEY = "PLACEHOLDER";

$(document).ready(function () {

    $("#inputForm").on("submit", async function (event) {
        event.preventDefault();

        // User input
        const city = $("#input").val().trim();

        // Get weather data and country data and finally update the DOM with said data.
        try {
            const weatherData = await getWeatherInformation(city);
            const countryData = await getCountryDetails(weatherData.sys.country);

            updateCityInformation(weatherData, countryData);
        }
        catch (error) {
            console.log(error);
            alert("Something went wrong.");
        }

        // Reset user input in the form
        $("#input").val("");
    });
});

// Get weather information based on the user input (city)
async function getWeatherInformation(city) {
    try {
        const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    q: city,
                    units: "metric",
                    mode: "json",
                    APPID: OWM_API_KEY
                }
            }
        );

        return response.data;
    }
    catch (error) {
        if (error.response && error.response.status === 404) {
            alert("Please type a valid city name");
        }
        else {
            alert("Something went wrong fetching weather data.");
        }
        throw error;
    }

}

// Get country information based on the user input (the data from getWeatherInformation() also returns country code)
async function getCountryDetails(countryCode) {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        return response.data;
    }
    catch (error) {
        if (error.response && error.response.status === 404) {
            alert("Something went wrong fetching country information.");
        }
        throw error;
    }
}

// Update the city information into DOM
function updateCityInformation(weatherData, countryData) {

    // Get the currency information (key, value) into currencyObject
    const currencyObject = Object.values(countryData[0].currencies)[0];

    // Create a string "currency" with the name of the currency + the symbol
    const currency = `${currencyObject.name} (${currencyObject.symbol})`;

    // Store the languages into a string
    const languages = Object.values(countryData[0].languages).join(", ");

    // Update the DOM
    $("#city-information").html(`
        <div class="card mx-auto shadow-lg">
            <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" class="card-img-top mx-auto" style="height: 100px; width: 100px;" alt="...">
            <div class="card-body">
                <h5 class="card-title">${weatherData.name}</h5>
                <p class="card-text">A city in ${countryData[0].name.common}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Weather description: ${weatherData.weather[0].description}</li>
                <li class="list-group-item">Temperature: ${weatherData.main.temp} &#8451</li>
                <li class="list-group-item">Clouds: ${weatherData.clouds.all} %</li>
                <li class="list-group-item">Humidity: ${weatherData.main.humidity} %</li>
                <li class="list-group-item">Currencies: ${currency}</li>
                <li class="list-group-item">Languages: ${languages}</li>
            </ul>
        </div>
        `);
}




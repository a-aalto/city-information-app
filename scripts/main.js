$(document).ready(function () {

    // hide the spinner by default
    $("#card-spinner").hide();

    // When user hits Enter or presses Submit button
    $("#inputForm").on("submit", async function (event) {
        event.preventDefault();

        // Read the user input
        const city = $("#input").val().trim();

        // If input field is left empty when submitting. Prevents useless API calls.
        if (!city) {
            alert("Please type in a city.");
            return;
        }

        // Get weather data and country data and finally update the DOM with said data. Show the spinner when API calls begin. Hide it when the data is ready to be displayed.
        try {

            // reset city information when making new API requests (ie. when user searches for a new city)
            $("#city-information").html("");

            // show the spinner when making API calls (regarding the city)
            $("#card-spinner").show();

            const weatherData = await getWeatherInformation(city);
            const countryData = await getCountryDetails(weatherData.sys.country);

            updateCityInformation(weatherData, countryData);
        }
        catch (error) {
            console.log(error);
            alert(error.message);
        }
        finally {
            $("#card-spinner").hide();
        }

        // Reset user input in the form
        $("#input").val("");
    });
});

// Get weather information based on the user input (city).
async function getWeatherInformation(city) {
    try {
        const response = await axios.get(
            "/.netlify/functions/OWM_API",
            {
                params: {
                    city
                }
            }
        );

        return response.data;
    }
    catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error("Please type in a valid city name.");
        }
        else {
            throw new Error("Something went wrong fetching weather data.");
        }
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
            throw new Error("Something went wrong fetching country data.");
        }
        throw new Error("Unexpected issue occurred fetching country data.");
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
        <div class="card text-bg-light mx-auto shadow-lg">
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




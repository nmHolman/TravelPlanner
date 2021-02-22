// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

// Get data from Weather API
const getData = async () => {
    let location = document.getElementById('city').value;
    let tripDate = document.getElementById('date').value;
    let locationData = await Client.getLocationData(location);

    // extract lat/lng data
    const lat = locationData.postalCodes[0]['lat'];
    const lng = locationData.postalCodes[0]['lng'];

    const coords = `lat=${lat}&lon=${lng}`;

    const weatherbitKey = 'e60f819356e0417fa34fd746ed3b1849'
    const weatherbitAPIUrl = `https://api.weatherbit.io/v2.0/forecast/daily?${coords}&units=I&key=${weatherbitKey}`
    

    const weatherRequest = await fetch(weatherbitAPIUrl);
    

    try {
        const weatherData = await weatherRequest.json();
        
        const tripData = {
            date: tripDate,
            city: weatherData.city_name,
            state: weatherData.state_code,
            country: weatherData.country_code
        };

        const country = tripData.country;
        const countryFactsUrl = `http://restcountries.eu/rest/v2/alpha/${country}`;        
        const countryRequest = await fetch(countryFactsUrl);
        const countryData = await countryRequest.json();

        console.log(countryData);

        weatherData.data.forEach( i => {
            if (i.datetime == tripDate) {
                tripData.tempLow = i.low_temp;
                tripData.tempHigh = i.high_temp;
                tripData.precip = i.precip;
            } else {
                tripData.tempLow = "Forecast Unavailable";
                tripData.tempHigh = "Forecast Unavailable";
                tripData.precip = "Forecast Unavailable";
            }
        });

        // console.log(weatherData)
        // console.log(tripData)
        return tripData;
        
    } catch (error) {
        console.log("error", error);
    }
};

// Click Event Function
async function generateEntry(e) {

    const tripData = await getData();
    const feelings = document.getElementById('feelings').value;

    
    Client.postGET(tripData);

    document.getElementById('feelings').value = '';
    document.getElementById('city').value = '';
}

export { getData, generateEntry}
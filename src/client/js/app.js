// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

// Get data from Weather API
const getData = async () => {
    let c = document.getElementById('city').value;
    let city = c.toUpperCase();
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;

    let location = `${city}, ${state}&country=${country}`;

    let tripDate = document.getElementById('date').value;
    let locationData = await Client.getLocationData(location);

    // extract lat/lng data
    const lat = locationData.postalcodes[0]['lat'];
    const lng = locationData.postalcodes[0]['lng'];

    const coords = `lat=${lat}&lon=${lng}`;

    // Pull weather data
    const weatherbitKey = 'e60f819356e0417fa34fd746ed3b1849';
    const weatherbitAPIUrl = `https://api.weatherbit.io/v2.0/forecast/daily?${coords}&units=I&key=${weatherbitKey}`;
    const weatherRequest = await fetch(weatherbitAPIUrl);   

    try {
        const weatherData = await weatherRequest.json();

        // Pull country facts
        const country = weatherData.country_code;
        const countryFactsUrl = `http://restcountries.eu/rest/v2/alpha/${country}`;        
        const countryRequest = await fetch(countryFactsUrl);
        const countryData = await countryRequest.json();
    
        const tripData = {
            date: tripDate,
            city: city,
            state: weatherData.state_code,
            country: countryData.name,
            capital: countryData.capital,
            flag: countryData.flag,
            languages: countryData.languages.map(({ name }) => name),
            currencies: {
                name: countryData.currencies.map(({ name }) => name),
                code: countryData.currencies.map(({ code }) => code),
                symbol: countryData.currencies.map(({ symbol }) => symbol),
            }
        };
       
        // Pull location image
        const locationImg = await Client.getImage(tripData.city, tripData.state, tripData.country);
        tripData.image = locationImg;

        for (let i of weatherData.data) {
            if (i.datetime == tripDate) {
                tripData.tempLow = i.low_temp;
                tripData.tempHigh = i.high_temp;
                tripData.precip = i.precip;                
                break;
            } else {    
                tripData.tempLow = "--";
                tripData.tempHigh = "--";
                tripData.precip = "--";
            }
        }
        
        console.log(tripData)
        return tripData;
        
    } catch (error) {
        console.log("error", error);
    }
};

// Click Event Function
async function generateEntry(e) {

    const tripData = await getData();
    
    Client.postGET(tripData);

    document.getElementById('city').value = '';
}

export { getData, generateEntry}
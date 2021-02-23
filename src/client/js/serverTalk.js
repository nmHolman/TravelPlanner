// Asnyc Post
const postData = async (url, data) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

// Async GET
const retrieveData = async (url) => {
    const request = await fetch(url);
    try {
        const data = await request.json()
        const allData = data.slice(-1)[0];
        console.log(data);

        let html = `

            <div class="trip">
                    <div class="trip-destination">${allData.city}</div>
                    <div class="trip-date">${allData.date}</div>
                    <img class="img" src=${allData.image} alt="">
                    <div class="forecast-title">Forecast (&#176;F)</div> 
                    <div class="trip-weather">                   
                    <div class="trip-high weather-info">
                        <div class="weather-data">${allData.tempHigh}&#176;</div>
                        <div class="weather-label">High</div>
                    </div>
                    <div class="trip-low weather-info">
                        <div class="weather-data">${allData.tempLow}&#176;</div>
                        <div class="weather-label">Low</div>
                    </div>
                    <div class="trip-precip weather-info">
                        <div class="weather-data">${allData.tempLow}</div>
                        <div class="weather-label">Precip</div>
                    </div>
                    </div>
                    <div class="country-facts">
                    <div class="title">Country Quick Facts</div>
                    <div class="fact-grp">
                        <div class="fact-label">Country</div>
                        <div class="fact">${allData.country}</div>            
                    </div>
                    <div class="fact-grp">
                        <div class="fact-label">Flag</div>
                        <div class="fact"><img src=${allData.flag} alt=""></div>            
                    </div>
                    <div class="fact-grp">
                        <div class="fact-label">Capital City</div>
                        <div class="fact">${allData.capital}</div>
                    </div>
                    <div class="fact-grp">
                        <div class="fact-label">Language(s)</div>
                        <div class="fact">${allData.languages}</div>
                    </div>
                    <div class="fact-grp">
                        <div class="fact-label">Currency</div>
                        <div class="fact">${allData.currencies.name} (${allData.currencies.symbol})</div>
                    </div>
                    </div>
                </div>

            `
        ;

        const trips = document.getElementById('planned-trips');
        trips.insertAdjacentHTML('beforeend', html)

    } catch (error) {
        console.log("error", error);
    }
};

// POST GET
function postGET(d) {
    postData('http://localhost:5000/add', d).then(retrieveData('http://localhost:5000/data'));
}

export {
    postData,
    retrieveData,
    postGET
}
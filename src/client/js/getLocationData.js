const getLocationData = async (loc) => {
    
    // build url for fetch
    const location = loc;
    const geonamesKey = 'nmholman'
    
    const geonamesAPIUrl = `http://api.geonames.org/postalCodeSearchJSON?placename=${location}&maxRows=10&username=${geonamesKey}`

    // fetch data
    const request = await fetch(geonamesAPIUrl);

    try {
        const allData = await request.json();
        return allData;
   
    } catch (error) {
        console.log("error", error);
    }
}

export {getLocationData}
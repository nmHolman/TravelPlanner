const getLocationData = async (loc) => {
    
    // build url for fetch
    const location = loc;

    let apiKey = {
        geonames_key: process.env.GEONAMES_KEY
    };
    
    const geonamesAPIUrl = `http://api.geonames.org/postalCodeLookupJSON?placename=${location}&maxRows=10&username=${apiKey.geonames_key}`
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
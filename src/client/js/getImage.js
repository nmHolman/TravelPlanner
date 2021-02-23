const getImage = async (city, state, country) => {
    const pixabayApiKey = '13117425-1e3a6b225bb7249040edb3f24';
    
    if (country == 'United States of America') {
        let location = encodeURIComponent(`${city}, ${state}`);
        let pixabayApiUrl = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${location}&image_type=photo`;

        const imgReqest = await fetch(pixabayApiUrl);
        const img = await imgReqest.json();

        if (img.total > 0) {
            return img.hits[0]['webformatURL'];
        } else {
            return 'https://pixabay.com/get/g7c28cbe4462a208a86e3dcd72bbb1427db4988696f058470c31e7953f1315db72e670845cd76573d965c8500ffbdcf5194ddb82d1a4a002be232c77bb7571065_640.jpg';
        }
    } else {
        let location = encodeURIComponent(`${city}, ${country}`);
        let pixabayApiUrl = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${location}&image_type=photo`;

        const imgReqest = await fetch(pixabayApiUrl);
        const img = await imgReqest.json();

        if (img.total > 0) {
            return img.hits[0]['webformatURL'];
        } else {
            return 'https://pixabay.com/get/g7c28cbe4462a208a86e3dcd72bbb1427db4988696f058470c31e7953f1315db72e670845cd76573d965c8500ffbdcf5194ddb82d1a4a002be232c77bb7571065_640.jpg';
        }
    }    
}

export {getImage}
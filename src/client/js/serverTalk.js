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
        const allData = await request.json()
        console.log(allData)

        const lastDate = allData.slice(-1)[0].date;
        const lastTemp = allData.slice(-1)[0].tempHigh;
        

        // document.getElementById('date').innerHTML = `<p>Date <br/><span id='result'>${lastDate}</span></p>`;
        // document.getElementById('temp').innerHTML = `<p>Temperature <br/><span id='result'>${lastTemp}&#176;F<span></p>`;
        

    } catch (error) {
        console.log("error", error);
    }
};

// POST GET
function postGET(d) {
    postData('http://localhost:5000/add', d).then(retrieveData('http://localhost:5000/data'));
}

export {postData, retrieveData, postGET}
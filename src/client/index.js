import { getData, postData, retrieveData,  postGET, generateEntry} from './js/app.js'

import './styles/style.scss'

// Click Event
document.getElementById('generate').addEventListener('click', generateEntry);

export {
    getData,
    postData,
    retrieveData,
    postGET,
    generateEntry
}
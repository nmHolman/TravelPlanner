import { getLocationData } from './js/getLocationData'
import { getData, generateEntry} from './js/app'
import { retrieveData, postData, postGET} from './js/serverTalk'


import './styles/style.scss'

// Click Event
document.getElementById('generate').addEventListener('click', generateEntry);

export {
    getData,
    getLocationData,
    postData,
    retrieveData,
    postGET,
    generateEntry    
}
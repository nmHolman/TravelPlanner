import { getLocationData } from './js/getLocationData'
import { getData, generateEntry} from './js/app'
import { retrieveData, postData, postGET} from './js/serverTalk'
import { countrySelect, countryWatch } from './js/locSelect'


import './styles/style.scss'

// Click Event
document.getElementById('generate').addEventListener('click', generateEntry);
document.getElementById('country').addEventListener('click', countryWatch);

export {
    getData,
    getLocationData,
    postData,
    retrieveData,
    postGET,
    generateEntry,
    countrySelect,
    countryWatch    
}
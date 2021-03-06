import { getLocationData } from './js/getLocationData'
import { getData, generateEntry} from './js/app'
import { retrieveData, postData, postGET} from './js/serverTalk'
import { countrySelect, countryWatch, stateSelect } from './js/locSelect'
import {getImage} from './js/getImage'


import './styles/style.scss'
import './styles/newTrip.scss'
import './styles/plannedTrips.scss'
import './styles/breaks.scss'

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
    countryWatch,
    stateSelect,
    getImage   
}
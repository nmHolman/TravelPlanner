import { getLocationData } from './js/getLocationData'
import { getData, generateEntry} from './js/app'
import { retrieveData, postData, postGET} from './js/serverTalk'
import { countrySelect, countryWatch, stateSelect } from './js/locSelect'
import {getImage} from './js/getImage'
import { createTrip } from './js/createTrip'


import './styles/style.scss'
import './styles/newTrip.scss'
import './styles/plannedTrips.scss'

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
    getImage,
    createTrip    
}
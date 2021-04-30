/**
 * Import action types here
 */
// import { EXAMPLE_ACTION } from './'

import { ar } from '../../../assets/lang/ar'
import { en } from '../../../assets/lang/en'
import { SET_LOCALE, FETCHING, SUCCESS, FAILURE } from './action-types'

/**
 * Module internal initial state
 */
const initialState = {
    isAuthenticated: false,
    currentResources: {},
    currentLocale: 'en',
    currentDirection: 'ltr',

    fetching: false,
    success: false,
    failure: false,
    errors: [],
}

/**
 * Checks dispatched actions and updates state accordingly
 * @param {Object} state
 * @param {Object} action
 * @returns {Function}
 */

const reducer = (state = initialState, { type, payload = null }) => {
    switch (type) {
        case SET_LOCALE:
            return setLocale(state, payload)
        default:
            return state
    }
}

/**
 * Returns an updated version of the state based on the action
 * @param {Object} state
 * @param {Object} payload
 * @return {Object} state
 */
function setLocale(state, payload) {
    console.log(state, payload)
    return {
        ...state,
        currentLocale: payload,
        currentResources: payload === 'en' ? en : ar,
        currentDirection: payload === 'en' ? 'ltr' : 'rtl',
    }
}

export default reducer


import {
    SET_LOCALE
} from './action-types'


/**
 * Creates an action with a specified action type and payload
 * @param {*} payload 
 */
export function setLocale(payload){
    return {
        type: SET_LOCALE,
        payload
    }
}
    
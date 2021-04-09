import React from 'react'
import { post } from '../../services'
import localisation from '../../localisations'

const RegisterService = async (
    payload,
    onfetching,
    onsuccess,
    onfailure,
    trans
) => {
    onfetching()
    let result = false
    try {
        payload = {
            ...payload,
            client_id: '2',
            client_secret: 'VqCDubRXgCjgSLvlwUdUMcJ8YYimoubzcKz7VX1L',
        }
        result = await post('/registration/email?include=token', payload)
    } catch (error) {
        let errorsString = ''
        const { response } = error
        if (response) {
            const { data } = response
            if (data) {
                const { errors } = data
                if (errors.email) {
                    errorsString += errors.email.join('<br/>')
                }
                if (errors.password) {
                    errorsString += errors.password.join('<br/>')
                }
            }
        }
        if (errorsString == '') {
            errorsString = trans('Something Went Wrong')
        }
        onfailure(errorsString)
    }
    if (result) {
        const { data } = result
        if (data && data.data) {
            const { token } = data.data
            localStorage.setItem('token', JSON.stringify(token))
        }
        onsuccess(result)
    }
}
export { RegisterService }

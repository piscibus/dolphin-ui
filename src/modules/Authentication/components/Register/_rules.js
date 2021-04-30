import React from 'react'
import localisation from '../../../../localisations'

export const Rules = () => {
    const { trans } = localisation.Create()
    return {
        email: [
            {
                required: true,
                message: trans('email required'),
            },
            {
                type: 'email',
                message: trans('Please enter a valid email'),
            },
        ],
        password: [
            {
                required: true,
                message: trans('Password is required'),
            },
        ],
    }
}

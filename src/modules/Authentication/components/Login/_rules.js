import localisation from '../../../../localisations'

export const rules = () => {
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
            // {
            //   pattern: '/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,20}$/',
            //     message:
            //     'Password should at least has a capital letter, small letter',
            // },
        ],
    }
}

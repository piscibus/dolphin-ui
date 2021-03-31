export const rules = (locale) => {
    return {
        email: [
            {
                required: true,
                message: 'Email is required',
            },
            {
                type: 'email',
                message: 'Please enter a valid email',
            },
        ],
        password: [
            {
                required: true,
                message: 'Password is required',
            },
            {
                pattern: '/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,20}$/',
                message:
                    'Password should at least has a capital letter, small letter',
            },
        ],
    }
}

const initialState = [
    {
        email:'admin@email.com',
        username:'admin',
        password:'password'
    }
]

export default (state= initialState, {type, payload}) => {
    switch(type) {
        case 'sign_up':
            return [
                ...state,
                {
                    email: payload.email,
                    username: payload.username,
                    password: payload.password,
                }
            ]
        default:
            return state;
    }
}
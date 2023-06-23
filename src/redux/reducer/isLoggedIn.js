const initialState = {
    isLoggedIn:false,
    username:'',
};

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'login_success':
            return state = {
                isLoggedIn:true,
                username: payload.username
            };
        case 'logout':
            return state = {
                isLoggedIn:false,
                username:''
            }
        default:
            return state
    }
}

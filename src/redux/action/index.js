export const signUp = (email, username, password) => {
    return {
        type:'sign_up',
        payload:{
            email,
            username,
            password
        }
    }
}

export const login_success = (username) => {
    return {
        type:'login_success',
        payload: {username}
    }
}

export const logout = () => {
    return {
        type:'logout'
    }
}
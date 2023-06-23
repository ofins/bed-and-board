import React, {useState} from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../redux/action'
import { Button } from 'react-bootstrap'

const Login = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState('')
    const users = useSelector(state => state.user)
    const isLoggedIn = useSelector(state => state.isLoggedIn)

    const [details, setDetails] = useState({
        username: '',
        password: '',
    })
    console.log(details)

    const checkUsers = () => {
        if (
            users.find(user => user.username === details.username && user.password === details.password)
        ) {
            dispatch(action.login_success(details.username))
            console.log('logged in!')
        } else {
            setErrors(<p id='error-msg'>incorrect username or password!</p>)
        }
    }
    return (
        <div className="login--container">
            <div className={`login--box ${isLoggedIn.isLoggedIn ? 'none' : ''}`}>
                <h3>Login</h3>
                {errors ? errors : null}
                <div className="login--inputBox">
                    <label htmlFor="username">
                        <input onChange={e => setDetails({
                            ...details,
                            username: e.target.value
                        })} autoFocus placeholder='enter your username' type="text" name="username" id="username" />
                    </label>
                    <label htmlFor="password">
                        <input onChange={e => setDetails({
                            ...details,
                            password: e.target.value
                        })} placeholder='enter your password' type="password" name="password" id="password" />
                    </label>
                    
                </div>
                <button onClick={checkUsers}>Login</button>
                <p>Don't have an account? <Link to="/sign-up">Sign Up Now</Link></p>
            <p>mock account: username:admin / password: password</p>
            </div>
            <div className={`login--box success ${isLoggedIn.isLoggedIn ? '': 'none'}`}>
                <h3>Welcome, <span>{details.username}</span></h3>
                <h3><Link to="/">Click here to continue booking</Link></h3>
                <Button variant='primary' onClick={() => dispatch(action.logout())}>Logout</Button>
            </div>
        </div>
    )
}

export default Login
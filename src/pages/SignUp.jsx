import React, {useState} from 'react'
import '../styles/SignUp.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../redux/action'

const SignUp = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user)

    const [user, setUser] = useState({
        email:'',
        username:'',
        password:'',
        complete:false
    })
    
    const handleSignUp = () => {
        dispatch(action.signUp(user.email, user.username, user.password))
        setUser({complete:true})
        console.log(users)
    }

    return (
        <div className="signUp--container">
            <div className={`signUp--box ${user.complete ? 'none' : ''}`}>
                <h3>SignUp</h3>
                <div className="signUp--inputBox">
                    <label htmlFor="email">
                        <input onChange={(e) => setUser({
                            ...user,
                            email: e.target.value
                        })} autoFocus placeholder='enter your email' type="email" name="email" id="email" />
                    </label>
                    <label htmlFor="username">
                        <input onChange={(e) => setUser({
                            ...user,
                            username: e.target.value
                        })} placeholder='enter your username' type="text" name="username" id="username" />
                    </label>
                    <label htmlFor="password">
                        <input onChange={(e) => setUser({
                            ...user,
                            password: e.target.value
                        })} placeholder='enter your password' type="password" name="password" id="password" />
                    </label>
                </div>
                <button onClick={handleSignUp}>SignUp</button>
                <p>Already have an account? <Link to="/login">Login Now</Link></p>
            </div>
            <div className={`signUp--box ${user.complete ? '' : 'none'}`}>
                <h3>Success!</h3>
                <h4><Link to="/login">Continue to login</Link></h4>
            </div>
        </div>
    )
}

export default SignUp
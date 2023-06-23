import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../redux/action'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch();
    return (
        <div className="navbar--container">
            <div className="navbar--logo">
                <Link className='navbar--logoText' to="/">Bed & Board</Link>
            </div>
                <ul>
                    <li><Link to="/help" id='help'>/help</Link></li>
                    {isLoggedIn.isLoggedIn ?
                        <>
                            <li className='navbar--links'><Link to="/">Bookings</Link></li>
                            <li className='navbar--links gt1024'>Account</li>
                            <li className='navbar--links gt1024'>Settings</li>
                            <li onClick={() => {
                                dispatch(action.logout())
                                navigate("/")
                            }}>Logout</li>
                        </>
                        :
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/sign-up">Sign Up</Link></li>
                        </>
                    }
                </ul>

        </div>
    )
}

export default Navbar
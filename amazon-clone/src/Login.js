import React from 'react';
import {Link} from 'react-router-dom'
import './Login.css';
function Login(){
    return (
        <div className='login_page'>
            <Link to='/'>
                <img className='login_logo' src='https://i0.wp.com/manchesterbizfair.co.uk/wp-content/uploads/2021/10/amazon-logo.png?resize=768%2C231&ssl=1' alt=''/>
            </Link>
            <div className='login_container'>
                <h1> Sign In</h1>
                <form>
                    <h5>
                        E-mail
                    </h5>
                    <input type='text'></input>
                    <h5>
                        Password
                    </h5>
                    <input type='password'></input>
                <button className='signin'> Sign In </button>
                </form>
                <p>
                    By signing-in you Agree to the amazon-clone
                    Conditions of Use & Sale. Please See our 
                    Privacy Policy. 
                </p>
                <button className='register'> Create Your Amazon Account </button>

            </div>
        </div>
    )
}
export default Login;
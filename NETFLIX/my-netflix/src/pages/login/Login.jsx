import './login.scss';
import { useState , useRef } from 'react';


export default function Login() {
    
    
    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt='Logo' />
                         
                </div>
                </div>
            <div className="container">
                
                <form>
                <h1>Sign in</h1>
                    <input type="email" placeholder='Email or Phone number'/>
                    <input type="password" placeholder='Password' />
                    <button className='loginButton'>Sign in</button>
                    <span>New to Netflix? <strong>Sign up here.</strong></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <strong>Learn more</strong>.</small>
            </form>


                
            </div>
        </div>
    )
}
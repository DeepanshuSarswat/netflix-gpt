import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import { validateForm } from '../constaints/utils';
function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [invalidInputMessage, setInvalidInputMessage] = useState("");
    const email = useRef();
    const password = useRef();
    const fullName = useRef();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const message = validateForm(email.current.value, password.current.value);
        setInvalidInputMessage(message)
    }

    return (
        <div className=''>
            <Header />

            <>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_small.jpg' />


            <form onSubmit={handleSubmit} className=' top-32 w-2/5 bg-black bg-opacity-80 p-8 absolute mx-auto right-0 left-0 text-white rounded-lg '>

            <h1 className='text-center text-3xl my-3 font-bold'>{isSignInForm? 'Sign IN' : "Sign Up"}</h1>


            {
                isSignInForm || <input ref={fullName} className=' rounded-lg p-2 my-4 w-full bg-gray-700' type='text' placeholder='Enter your name' />
            }

            <input ref={email} className=' rounded-lg p-2 my-4 w-full bg-gray-700' type='email' placeholder='Enter your E-mail' />

            <input ref={password} className=' rounded-lg p-2 my-4 w-full bg-gray-700' type='password' placeholder='Enter your password' />

            <p className='text-red-700 font-bold text-xl'>{invalidInputMessage && invalidInputMessage}</p>
            <button type='submit' className='p-2 text-white my-4 bg-red-600 w-full rounded-lg'> Submit</button>

            <p className='text-xl font-bold cursor-pointer' onClick={()=>setIsSignInForm(!isSignInForm)}>{
                isSignInForm ? "Don't have account? Sign Up" : "Already have Account Sign In"
            }</p>
            </form>
            </>
            
        </div>
    );
}

export default Login;
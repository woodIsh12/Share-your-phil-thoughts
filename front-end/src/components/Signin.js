import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import useCollapse from 'react-collapsed';


const Signin = props=>{

    const [expanded, setExpanded] = useState(false);
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState(false);




    const handleSignin = event=>{
        event.preventDefault();
        if(password === confirmPassword) {

            axios.post('http://localhost:8080/api/v1/sign-in', {username:username, password:password})
            .then(result=>{
                console.log(result.data);
            })
            .catch(error=>console.log(error));
        }else{
            setPasswordCheck(true);
        }
    }

    return(
        <>
        <div className='individual-container'>

        <button
            {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}>
        {isExpanded ? 'Collapse' : 'Expand'}
        </button>
        <form className='form' onSubmit={event => handleSignin(event)}  {...getCollapseProps()}>
            <h2>User Sign in</h2>
            <input required type='text' value={username} placeholder='Username' onInput={event=> setUsername(event.target.value) }></input><br></br>
            <input required type='password' placeholder='Password' value={password} onInput={event=>setPassword(event.target.value)}></input><br></br>
            <input required type='password' placeholder='Confirm Password' value={confirmPassword} onInput={event=>setConfirmPassword(event.target.value)}></input>
            <br></br>
            <button>Sign In</button>
        </form>
        {passwordCheck? <p>Password doesn't match</p> : <></>}
        </div>
        </>
    )
}

export default Signin;
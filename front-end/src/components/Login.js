import React from 'react';
import useCollapse from 'react-collapsed';
import { useState } from 'react';
import axios from 'axios';


const LogInForm = props=>{
    const [expanded, setExpanded] = useState(false);
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = event =>{
        event.preventDefault();

        axios.post('http://localhost:8080/api/v1/log-in', {username:username, password:password })
        .then(result =>{
            console.log(result.data);
            props.setIsLogged(true);
            props.setLoggedUsername(result.data.username);
            props.setLoadingUser(false);
        }).catch(error => console.log(error));
    }

    return(
        <>
        <div className='individual-container'>

        <button
            {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}>
        {isExpanded ? 'Collapse' : 'Log In'}
        </button>
        <form className='form' onSubmit={event => handleLogin(event)}  {...getCollapseProps()}>
            <h2>User log in</h2>
            <input required type='text' value={username} placeholder='Username' onInput={event=> setUsername(event.target.value) }></input><br></br>
            <input required type='password' placeholder='Password' value={password} onInput={event=>setPassword(event.target.value)}></input>
            <br></br>
            <button>Log In</button>
        </form>
        </div>
        </>
    )
}

export default LogInForm;
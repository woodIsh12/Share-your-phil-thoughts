import React from 'react';
import LogInForm from './components/Login';
import { useState } from 'react';
import Signin from './components/Signin';
import NewThought from './components/NewThought';

const Authentication = props=>{
    const [isLogged, setIsLogged] = useState(false);
    const [loggedUsername, setLoggedUsername] = useState("");
    const [loadingUser, setLoadingUser] = useState(true);

    const handleLogOut = event=>{
        setLoggedUsername(""); 
        setIsLogged(false);  
    }

    return(
        <>
        <div className='forms-container'>
        {isLogged? <h1>Hello {loggedUsername}</h1>: <h1>Want to Write?</h1>}
        {!isLogged?
        <><LogInForm setIsLogged={setIsLogged} setLoggedUsername={setLoggedUsername} setLoadingUser={setLoadingUser}/>
        <Signin setIsLogged={setIsLogged}/> </>: <></>}
        {isLogged?<NewThought setChangingThoughts={props.setChangingThoughts} loggedUsername={loggedUsername}/>: <></>}
        <button onClick={event => handleLogOut(event)}>Log out</button>
        </div>
        </>
    )
}

export default Authentication;
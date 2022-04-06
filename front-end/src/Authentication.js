import React from 'react';
import LogInForm from './components/Login';
import { useState } from 'react';
import Signin from './components/Signin';
import NewThought from './components/NewThought';

const Authentication = props=>{
    const [loggedUsername, setLoggedUsername] = useState("");
    const [loadingUser, setLoadingUser] = useState(true);

    return(
        <>
        <div className='forms-container'>
        <h1>Hello forms</h1>
        <LogInForm setLoggedUsername={setLoggedUsername} setLoadingUser={setLoadingUser}/>
        <Signin />
        <NewThought />
        </div>
        </>
    )
}

export default Authentication;
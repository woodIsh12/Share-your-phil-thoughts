import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './navBar';
import Thoughts from './thoughts';
import Authentication from './Authentication';




const App = props =>{

    const [loggedUsername, setLoggedUsername] = useState("");
    const [loadingUser, setLoadingUser] = useState(true);

    return(<>
    <NavBar />
    <div className='container'>
    <Thoughts/>
    <Authentication />
    </div>

    </>)


}

export default App;
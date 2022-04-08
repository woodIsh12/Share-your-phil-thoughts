import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './navBar';
import Thoughts from './thoughts';
import Authentication from './Authentication';




const App = props =>{

    const [changingThoughts, setChangingThoughts] = useState("");

    return(<>
    <NavBar />
    <div className='container'>
    <Thoughts changingThoughts={changingThoughts}/>
    <Authentication setChangingThoughts={setChangingThoughts}/>
    </div>

    </>)


}

export default App;
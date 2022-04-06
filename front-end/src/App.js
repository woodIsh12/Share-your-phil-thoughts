import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './navBar';
import Thoughts from './thoughts';




const App = props =>{

    return(<>
    <NavBar />
    <div className='container'>
    <Thoughts/>
    <div className='forms-container'></div>
    </div>
    </>)


}

export default App;
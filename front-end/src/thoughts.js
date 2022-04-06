import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import IndividualThought from './Thought';


const Thoughts = props=>{

    const [thoughtsArr, setThoughts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(function loadThoughts(){
        axios.get('http://localhost:8080/api/v1/thoughts')
        .then(result=>{
            setThoughts(result.data);
            console.log(result.data);
            setLoading(false);
        }).catch(error =>{
            console.log(error);
        })
    }, []);


    return(<>
    {loading?<p>Waiting</p> :<div className='thoughts-container'>
        {thoughtsArr.map(thought=>{
            return <IndividualThought key={thought._id} thought={thought}/>;
        })}</div>}
    </>);
}

export default Thoughts;
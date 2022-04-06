import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import useCollapse from 'react-collapsed';


const NewThought = props=>{

    const [expanded, setExpanded] = useState(false);
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");





    const handleNewThought = event=>{
        event.preventDefault();

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
        <form className='form' onSubmit={event => handleNewThought(event)}  {...getCollapseProps()}>
            <h2>New Thought</h2>
            <input ></input><br></br>
            <input ></input><br></br>
            <input ></input>
            <br></br>
            <button>Sign In</button>
        </form>

        </div>
        </>
    )
}

export default NewThought;
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import useCollapse from 'react-collapsed';


const NewThought = props=>{

    const [expanded, setExpanded] = useState(false);
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [quote, setQuote] = useState("");
    const [authorOfQuote, setQuoteAuthor] = useState("");





    const handleNewThought = event=>{
        event.preventDefault();

        axios.post('http://localhost:8080/api/v1/thoughts',{title, content, quote, authorOfQuote, username:props.loggedUsername })
        .then(result=>{
            console.log(result);
            props.setChangingThoughts(title);
        }).catch(error =>{
            console.log(error);
        })

    }

    return(
        <>
        <div className='individual-container'>

        <button
            {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}>
        {isExpanded ? 'Collapse' : 'Write'}
        </button>
        <form className='form' onSubmit={event => handleNewThought(event)}  {...getCollapseProps()}>
            <h2>New Thought</h2>
            <input required placeholder='Title' value={title}  onInput={event=> setTitle(event.target.value) }></input><br></br>
            <textarea required placeholder='Content' rows={4} style={{width: "90%"}} value={content}  onInput={event=> setContent(event.target.value) }></textarea>
            <textarea placeholder='Quote' rows={4} style={{width: "90%"}} value={quote}  onInput={event=> setQuote(event.target.value) }></textarea>
            <input placeholder='Quote Author' value={authorOfQuote}  onInput={event=> setQuoteAuthor(event.target.value) }></input><br></br>
            <br></br>
            <button>Post it</button>
        </form>

        </div>
        </>
    )
}

export default NewThought;
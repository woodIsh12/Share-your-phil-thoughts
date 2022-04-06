import React, { useState } from 'react'
import useCollapse from 'react-collapsed';

const IndividualThought = props=>{

    const [expanded, setExpanded] = useState(false);
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();
    const content = props.thought.content;

    return(
        <>
        <div className='individual-container'>
            <h2>{props.thought.title}</h2>
            <p>{props.thought.date.substring(0, 10)}</p>
            <p>"{props.thought.quote}"</p>
            <div className='author'>
            <p>{props.thought.authorOfQuote}</p>
            </div>
            <div>
            <p className='expandedP'>{content.length >= 150 ? content.substring(0, 132): content }</p>
            {content.length > 150 ?
            <>
            <section className='expanded' {...getCollapseProps()}>{content.substring(132, content.length)}</section>
            <button
            {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}>
        {isExpanded ? 'Collapse' : 'Expand'}
        </button></>: <></>}
            </div>
            <p>{props.thought.username}</p>
        </div>
        </>
    );
}

export default IndividualThought;


import React from 'react'

const word = (props) => {
    return (
        <span className="me-3"> 
            <div  draggable="true" placement="bottom" dataToggle="popover" style={{cursor:"pointer"}}>
                {props.word}
            </div>
            <div className="display-7">
                {Array.isArray(props.classe)? `(${props.classe})` : "Ø"}
            </div>
        </span>
    )
}

export default word

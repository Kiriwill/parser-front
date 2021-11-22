import React from 'react'
import './styles.css'

const Loading = (props) => {
    return (
        <div
            className={`d-flex mt-5 pt-5 flex-column align-items-center justify-content-center border position-absolute ${props.size} bg-dark opacity-50`}>
                <div className="lds-facebook"><div></div><div></div><div></div></div>
                <div style={{color:"white"}}>Processando...</div>
        </div>
    )
}


export default Loading

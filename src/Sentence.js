import React from 'react';
import Word from './Word'

const Sentence = (props) => {
    const showSentence = (tokens) => {
        tokens[0].valor = tokens[0].valor[0].toUpperCase() + tokens[0].valor.slice(1)
        return props.tokens.map((token, i) => (
            <Word key={i} word={token.valor} classe={token.classe}/>
        ))
    }

    return (
        <div className="d-flex align-items-center justify-content-center" 
            style={{ width: props.width, height: props.height/1.2 }}>
            <blockquote className=" blockquote text-center">
                <p className="d-flex m-4 mt-0 display-5">
                   {showSentence(props.tokens)}
                </p>
                <footer className="mt-3 blockquote-footer">Para ver as definições use o icone abaixo.</footer>
            </blockquote>
        </div>
    )
}

export default Sentence




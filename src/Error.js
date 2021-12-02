import React from 'react';
import { FaRegSadCry } from 'react-icons/fa';


// const defaultError = "Houve um erro interno, tente novamente mais tarde."
const propositions = (
    <span>
        <ul style={{listStyleType:"none"}}>
            <li> Veja se todas as palavras estão escritas corretamente, </li> 
            <li> retire as palavras não encontradas e tente sem elas,</li> 
            <li> <strong>ou</strong> substitua as palavras não encontradas por sinonimos.</li> 
        </ul>
        <p/>
    </span>)

const showResults = (
    <span>. Então vou mostrar pra você um resultado possível.</span>
)

const Error = (props) => {

    const HandleLexicalError = (error, color) => (
        <span>
            Não reconheci a(s) palavra(s): <strong style={{color:color}}>{
                    error.detail.description.toUpperCase()}</strong>
            {error.type === "critical" ? propositions : showResults }
        </span>
    )

    const HandleParsingError = (error, color) => (
        <span>
            Não consegui entender essa parte: <strong style={{color:color}}>{
                    error.detail.description.toUpperCase()}</strong>
            {showResults}
        </span>
    )

    let renderCriticalLexicalError = () => {
        return (
        <div className="d-flex align-items-center justify-content-center" 
            style={{ width: props.width, height: props.height/1.15 }}>
            <blockquote className="blockquote text-center">
                <header className="d-flex align-items-center justify-content-center" >
                    <FaRegSadCry size={150} className="text-muted"/>
                </header>
                <p className="m-4 mt-0 display-5"> Ops... não consegui entender.</p>
                <footer className="blockquote-footer">{
                    HandleLexicalError(props.error, "#dc3535")}
                </footer>
            </blockquote>
        </div>
    )}


    let renderLexicalError = () => (
        <div className="d-flex align-items-center opacity-75 bg-white position-absolute justify-content-center border mt-4" 
            style={{ width: props.width, height: props.height/14 }}>
                {HandleLexicalError(props.error, "#1a0dab")}
                <div className="form-check-lg m-2 form-switch">
                    {/* <input 
                        style={{height: "25px", width: "50px", borderRadius: "1em"}}
                        className="form-check-input " 
                        type="checkbox"
                        onClick={props.showSentence}
                        id="flexSwitchCheckDefault" autoFocus/> */}
                </div>
        </div>
    )

    let renderParsingError = () => (
        <div className="d-flex align-items-center opacity-75 bg-white position-absolute justify-content-center border mt-4" 
            style={{ width: props.width, height: props.height/14 }}>
                {HandleParsingError(props.error, "#1a0dab")}
                {/* <div className="form-check-lg m-2 form-switch">
                    <input 
                        style={{height: "25px", width: "50px", borderRadius: "1em"}}
                        className="form-check-input " 
                        type="checkbox"
                        onClick={props.showSentence}
                        id="flexSwitchCheckDefault" autoFocus/>
                </div> */}
        </div>
    )

    let defaultShow = (
        <div className="d-flex align-items-center justify-content-center position-absolute w-100">
            <div className="d-flex align-items-center opacity-75 bg-white justify-content-center border mt-4" 
                        style={{ width: props.width, height: props.height/14 }}>
                            <div>
                                <strong style={{color:"#1a0dab"}}>
                                    Encontrei! </strong>Navegue na tela abaixo para ver os resultados ou mude a visualização 
                            </div>
                            <div className="form-check-lg m-2 form-switch">
                                <input 
                                    style={{height: "25px", width: "50px", borderRadius: "1em"}}
                                    className="form-check-input " 
                                    type="checkbox"
                                    onClick={props.showSentence}
                                    id="flexSwitchCheckDefault" autoFocus/>
                            </div>
                    </div>
        </div>
       
    )

    switch (props.error.type) {
        case "critical":
            //console.log('RENDERIZOU O CRITICAL')
            return renderCriticalLexicalError()
        case "lexical":
            return renderLexicalError()
        case "parsing":
            return renderParsingError()
        default:
            props.error.type = ""
            return defaultShow

    }
}

export default Error





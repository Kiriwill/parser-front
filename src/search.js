import React from 'react';
import { Redirect } from "react-router-dom";
import { Threedotjs, Github  } from '@icons-pack/react-simple-icons';
import Loading  from './Loading'

export class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            loading: false
          }
    }

    setsearch = (search) => {
        this.setState({
            search:search.target.value
        })
    }

    setRedirect = () => {
        if (this.state.search.length > 0) {
            this.props.parseSentence(this.state.search);
            this.setState({
                loading:true
            })
        }
    }

    setkeydown = (event) => {
        if (event.key === "Enter"){
            this.setRedirect()
        }
    }

    componentDidMount(){
        this.searchInput.focus();
    }

    render() {
        return (
            <div>
                {this.state.loading? <Loading size={"w-100 h-75"}/> : null}
                <div className="mt-3 ms-5 me-5">
                    {this.props.redirect ? <Redirect to={{pathname:"/search"}}/> : null}
                    <div className="row">
                        <div className="d-flex align-items-center justify-content-start">
                            <a 
                                href="https://github.com/Kiriwill/parser-api"
                                style={{color:"#6c757d"}}><Github size={45} /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-center pt-5 mt-5"> 
                            <Threedotjs size={150}/>
                        </div>
                        <div className="mt-5 w-100">
                            <div className="d-flex justify-content-center m-4 ">
                                <input 
                                    type="text" 
                                    className="form-control w-50 p-3 ps-4 rounded-6" 
                                    onChange={this.setsearch}
                                    ref={e => (this.searchInput = e)}
                                    placeholder="Digite uma frase para encontrar suas classes gramaticais"
                                    onKeyDown={this.setkeydown}
                                    maxLength={90}
                                    required
                                ></input>
                                    <button type="button" onClick={ () => 
                                        this.setRedirect()}
                                        className="btn btn-outline-secondary btn-lg ms-3">
                                            Analisar!
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div className="row border-bottom m-2" style={{height: 330}}>
                        <div className="d-flex align-items-end fs-6 fw-lighter text-muted justify-content-center">
                            Parse.ro - Nenhum direito reservado.
                        </div>
                    </div>
                </div>
            </div>
            
            )
    }
}

export default Search

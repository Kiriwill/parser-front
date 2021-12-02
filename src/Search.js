import React from 'react';
import { Redirect } from "react-router-dom";
import { Github  } from '@icons-pack/react-simple-icons';
import { HiSearchCircle } from 'react-icons/hi';

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
        else {
            alert("Digite algo para ser analisado.");
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
                        <div className="border d-flex justify-content-center pt-2 mt-4"
                            style={{backgroundColor:"#f3f3f3"}}> 
                            <img src="twitter_header_photo_2.png" width="800"></img>
                        </div>
                        <div className="d-flex justify-content-center pt-2 mt-3">
                            <div class="w-50" >
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    onChange={this.setsearch}
                                    ref={e => (this.searchInput = e)}
                                    placeholder="Exemplo: o homem caiu na casa de maria"
                                    onKeyDown={this.setkeydown}
                                    maxLength={40}
                                    required
                                ></input>
                            </div>
                        </div >
                            <div className="d-flex justify-content-center pt-2 mt-2">
                                <button type="button" onClick={ () => 
                                    this.setRedirect()}
                                    className="btn btn-outline-secondary btn-md">
                                    <span className="pe-2" style={{backgroundColor:"none", border:"none"}}>
                                        <HiSearchCircle size="35"></HiSearchCircle>
                                    </span>
                                    Analisar

                                </button>
                            </div>
                    </div>
                    {/* <div className="row border-bottom m-2" style={{height: 100}}>
                        <div className="d-flex align-items-end fs-6 fw-lighter text-muted justify-content-center">
                            Parse.ro - Nenhum direito reservado.
                        </div>
                    </div> */}
                </div>
            </div>
            
            )
    }
}

export default Search

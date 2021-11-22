
import React, { Component } from 'react'
import { Threedotjs, Github } from '@icons-pack/react-simple-icons';
import { Link } from 'react-router-dom';


export class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
          }
    }

    componentDidMount(){
        this.searchInput.focus();
    }
    setRedirect = () => {
        this.props.parseSentence(this.state.search);    
        this.props.showLoading()
    }

    setkeydown = (event) => {
        if (event.key === "Enter"){
            this.setRedirect()
        }
    }
    

    setsearch = (search) => {
        this.setState({
            search:search.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="row mt-3 ms-4 me-4">
                    <div className="col-3">
                        <div className="d-flex align-items-center justify-content-start ">
                        <a 
                            className="d-flex justify-content-center align-items-center"
                            style={{textDecoration: "none"}}
                            href="https://parserov1.herokuapp.com/search">
                            <Threedotjs size={35} className="text-muted"/>
                                <h4 className="ms-2 text-muted pt-2 display-6" >Parse.ro!</h4>
                        </a>
                            
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-center mt-2">
                            <input 
                                ref={e => (this.searchInput = e) } 
                                type="text" 
                                className="form-control-lg border-secondary border-1 w-75 rounded-6"
                                onChange={this.setsearch}
                                onKeyDown={this.setkeydown}></input>
                            {/* <button type="button" className="btn btn-outline-secondary ms-3">Analisar</button> */}
                            <button 
                                type="button" 
                                onClick={ () => this.setRedirect()}
                                className="btn btn-outline-secondary ms-3 ps-3 pe-3">
                                Analisar
                            </button>
                        </div>
                    </div>
                    <div className="col-3 mt-2">
                        <div className="d-flex text-secondary align-items-center justify-content-end">
                            <a 
                                href="https://github.com/Kiriwill/parser-api"
                                style={{color:"#6c757d"}}><Github size={45} /></a>
                            

                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default Header



        
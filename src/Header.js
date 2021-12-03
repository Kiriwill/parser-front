
import React, { Component } from 'react'
import { Github } from '@icons-pack/react-simple-icons';



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
        if (this.state.search.length > 0) {
            this.props.parseSentence(this.state.search);    
            this.props.showLoading()
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
                        <div className="d-flex text-secondary align-items-center justify-content-start">
                                <a 
                                    href="https://github.com/Kiriwill/parser-api"
                                    style={{color:"#6c757d"}}><Github size={45} /></a>
                            </div>
                        </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-center mt-2">
                            <input 
                                ref={e => (this.searchInput = e) } 
                                type="text" 
                                className="form-control w-75"
                                onChange={this.setsearch}
                                onKeyDown={this.setkeydown}
                                maxLength={45}
                                ></input>
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
      
                    </div>
                </div>
        </div>
        )
    }
}

export default Header



        
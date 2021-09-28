
import React, { Component } from 'react'
import { Threedotjs, Github, Githubsponsors } from '@icons-pack/react-simple-icons';

export class Header extends Component {
    componentDidMount(){
        this.searchInput.focus();
    }
    render() {
        return (
            <div>
                <div className="row mt-3 ms-4 me-4">
                    <div className="col-3">
                        <div className="d-flex align-items-center justify-content-start ">
                            <Threedotjs className="text-muted"/>
                            <h7 className="ms-2 text-muted">Parce.ro!</h7>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-center">
                            <input ref={e => (this.searchInput = e) } type="text" className="form-control w-75 rounded-6"></input>
                            <button type="button" className="btn btn-outline-secondary ms-3">Analisar</button>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="d-flex align-items-center justify-content-end">
                            <Githubsponsors size={30}  className="me-2"/>
                            <Github size={30} className="text-dark"/>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default Header



        
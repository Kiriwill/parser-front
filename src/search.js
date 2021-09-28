import React from 'react'
import { Threedotjs } from '@icons-pack/react-simple-icons';
import { AiOutlineInfoCircle, AiOutlineSearch } from 'react-icons/ai'
import './tooltip.css'

export class Search extends React.Component {
    componentDidMount(){
        this.searchInput.focus();
    }

    render() {
        return (
            <div className="mt-3 ms-5 me-5">
                <div className="row">
                    <div className="d-flex align-items-center justify-content-start">
                        <AiOutlineInfoCircle className="text-muted"/>
                        <h9 className="ms-1 text-muted">Sobre o projeto</h9>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center pt-5 mt-5"> 
                        <Threedotjs size={150}/>
                    </div>
                    <div className="mt-5 w-100">
                        <div className="d-flex justify-content-center m-4 ">
                            
                            <input type="text" className="form-control w-50 p-3 rounded-6" ref={e => (this.searchInput = e)}></input>
                            <button type="button" className="btn btn-outline-secondary btn-lg ms-3">Analisar!</button>
                        </div>
                    </div>
                </div>
                <div className="row border-bottom m-2" style={{height: 340}}>
                    <div className="d-flex align-items-end fs-6 fw-lighter text-muted justify-content-center">
                        Copyright 2021 - Todos os direitos reservados.
                    </div>
                </div>
            </div>
            )
    }
}

export default Search

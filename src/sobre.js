
import React, { Component } from 'react'
import { Threedotjs, Github, Githubsponsors } from '@icons-pack/react-simple-icons';
import Header from './header'

export class Sobre extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="row m-5 p-4">
                        <div className="col">
                            <h4>Sobre o projeto</h4>
                            <p>DelafParserDB é um banco de palavras em Português-brasileiro para 
                                processamento sintático construido com base no dicionário do Projeto 
                                Unitex-PB. É um resultado do Programa de Iniciacão científica e 
                                Tecnológica da FATEC - Ipiranga.</p>
                            <h4>Autores</h4>
                            <p>PACHECO, Willian. Banco de dados para análise sintática em sentenças do português brasileiro.</p>
                            <p>Orientador: Manoel Francisco Guaranha</p>
                        </div>

                    </div>
                    {/* <div className="row border-bottom m-2" style={{height: 100}}>
                        <div className="d-flex align-items-end fs-6 fw-lighter text-muted justify-content-center">
                            Copyright 2021 - Todos os direitos reservados.
                        </div>
                    </div> */}
            </div>

            </div>
            )
    }
}

export default Sobre



        
import React from 'react'

const definitions = (props) => {
    return (
        <div hidden={props.hidden} className="card opacity-75 m-4 position-absolute" style={{height:"600px", width:props.width/5.5}}>
            <div class="card-body">
                <h5 className="card-title mt-2">Definições</h5>
                <dl>
                <dt> (SD): Sintagma Determinante</dt>
                        <dd className="text-muted">Artigos, Pronomes Demonstrativos, Pronomes Pessoais</dd>
                    <dt>(SN) Sintagma Nominal </dt>
                        <dd className="text-muted">Substantivos</dd>
                    <dt> (SP): Sintagma Preposicional</dt>
                        <dd className="text-muted">Preposições</dd>
                    <dt> (SNum): Sintagma Numeral</dt>
                        <dd className="text-muted">Pronomes Numerais</dd>
                    <dt> (SQ): Sintagma Quantificador</dt>
                        <dd className="text-muted">Pronomes Indefinidos</dd>
                    <dt> (SA): Sintagma Adjetival</dt>
                        <dd className="text-muted">Adjetivos</dd>
                    <dt> (SAdv): Sintagma Adverbial</dt>
                        <dd className="text-muted">Adverbos</dd>
                    <dt> (SV): Sintagma Verbal</dt>
                        <dd className="text-muted">Verbos</dd>
                    <dt> (SPoss): Sintagma Possesivo</dt>
                        <dd className="text-muted">Pronomes Possessivos</dd>
                </dl>
            </div>
        </div>
    )
}

export default definitions

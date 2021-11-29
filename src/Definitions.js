import React from 'react'

const definitions = (props) => {
    return (
        <div hidden={props.hidden} className="card opacity-75 m-4 position-absolute" style={{height:"600px", width:props.width/4}}>
            <div class="card-body" style={{fontSize:"1rem"}}>
                <h5 className="card-title mt-2">Definições</h5>
                <dl>
                <dt > (SD): Sintagma Determinante</dt>
                        <dd className="text-muted">D: Artigos, Pronomes Demonstrativos, Pronomes Pessoais</dd>
                    <dt>(SN) Sintagma Nominal </dt>
                        <dd className="text-muted">N: Substantivos</dd>
                    <dt> (SP): Sintagma Preposicional</dt>
                        <dd className="text-muted">P: Preposições</dd>
                    <dt> (SNum): Sintagma Numeral</dt>
                        <dd className="text-muted">Num: Pronomes Numerais</dd>
                    <dt> (SQ): Sintagma Quantificador</dt>
                        <dd className="text-muted">Q: Pronomes Indefinidos</dd>
                    <dt> (SA): Sintagma Adjetival</dt>
                        <dd className="text-muted">A: Adjetivos</dd>
                    <dt> (SAdv): Sintagma Adverbial</dt>
                        <dd className="text-muted">ADV: Adverbos</dd>
                    <dt> (SV): Sintagma Verbal</dt>
                        <dd className="text-muted">V: Verbos</dd>
                    <dt> (SPoss): Sintagma Possesivo</dt>
                        <dd className="text-muted">Poss: Pronomes Possessivos</dd>
                </dl>
            </div>
        </div>
    )
}

export default definitions

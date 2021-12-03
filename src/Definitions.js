import React from 'react'

const definitions = (props) => {
    return (
        <div hidden={props.hidden} className="card opacity-75 m-4 position-absolute" style={{height:"700px", width:props.width/4}}>
            <div class="card-body" style={{fontSize:"1rem"}}>
                <h5 className="card-title mt-2">Definições</h5>
                <dl>
                <dt > (IP): Sintagma Inflexional</dt>
                        <dd className="text-muted">Representa uma sentença</dd>
                <dt > (DP): Sintagma Determinante</dt>
                        <dd className="text-muted">D: Artigos, Pronomes Demonstrativos, Pronomes Pessoais</dd>
                    <dt>(NP) Sintagma Nominal </dt>
                        <dd className="text-muted">N: Substantivos</dd>
                    <dt> (PP): Sintagma Preposicional</dt>
                        <dd className="text-muted">P: Preposições</dd>
                    <dt> (NumP): Sintagma Numeral</dt>
                        <dd className="text-muted">Num: Pronomes Numerais</dd>
                    <dt> (QP): Sintagma Quantificador</dt>
                        <dd className="text-muted">Q: Pronomes Indefinidos</dd>
                    <dt> (AP): Sintagma Adjetival</dt>
                        <dd className="text-muted">A: Adjetivos</dd>
                    <dt> (AdvP): Sintagma Adverbial</dt>
                        <dd className="text-muted">ADV: Adverbos</dd>
                    <dt> (VP): Sintagma Verbal</dt>
                        <dd className="text-muted">V: Verbos</dd>
                    <dt> (PossP): Sintagma Possesivo</dt>
                        <dd className="text-muted">Poss: Pronomes Possessivos</dd>
                </dl>
            </div>
        </div>
    )
}

export default definitions

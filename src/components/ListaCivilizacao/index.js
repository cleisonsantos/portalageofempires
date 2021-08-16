import React from 'react'

export default function index({ civilizacao }) {
    return (
        <div className="container">
            <h1>{civilizacao.id}</h1>
            <img src={civilizacao.url_icone} alt="" />
            <h1 >Nome : {civilizacao.name}</h1>
            <h1 >Tipo : {civilizacao.army_type}</h1>
            <h1 >Bônus : {civilizacao.team_bonus}</h1>

        </div>
    )
}

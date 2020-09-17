import React from 'react'
import './card.styles.css'


export const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img alt="monster" src={`https://robohash.org/${monster.id}animal?set=set4`} />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  )
}

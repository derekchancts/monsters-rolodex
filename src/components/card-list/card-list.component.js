import React from 'react'
import { Card } from '../card/card.component'
import './card-list.style.css'



export const CardList = ({ monsters }) => {
  // console.log(props)
  return (
    <div className="card-list">
       {monsters.map(monster => (
          <Card key={monster.id} monster={monster} />
       ))}
    </div>
  )
} 


/*
export const CardList = ({ monster }) => {
  // console.log(monster)
  return (
   
      <h1>{monster.name}</h1>
   
  )
} 
*/





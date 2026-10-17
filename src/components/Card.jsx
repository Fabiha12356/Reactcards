import React from 'react'
import "./Card.css";
export const Card = ({tittle,des,prise,img}) => {
   return (
    <div className="card" >
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{tittle}</h5>
  
    <p className="card-text">{des}</p>
    <p className="card-text">{prise}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}
export default Card
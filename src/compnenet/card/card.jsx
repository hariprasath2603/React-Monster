import React from 'react';
import "./card.css";

const Card = (props) => {
   const {name,id,email} = props.data;

    return ( 
        <div className="card-container">
        <img 
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="Monster"
        />
        <h3>{name}</h3>
        <p>{email}</p>
        </div>
        );
}
 
export default Card;
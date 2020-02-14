import React from 'react';

const Card = ({player}) => {
    

// console.log(props)
const {name, country} = player
  return (
        <div className='cardFlex'>            
            <div className='followers'>
                <h2>Player Name: {name}</h2>
                <h2>Country: {country}</h2>
            </div>
        </div>
  );
  
}

export default Card;
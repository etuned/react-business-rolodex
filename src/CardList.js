import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {
    return (
    <div>
      {
        people.map((user, i) => {
            return (
                <Card key={i} 
                gender={people[i].gender} 
                img={people[i].img} 
                name={people[i].name} 
                email={people[i].email} 
                position={people[i].position} 
                />
            );
        })    
      }
    </div>
    );
} 

export default CardList;
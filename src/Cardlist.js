import React from 'react';
import Card from './Card';


const Cardlist = ({people}) => {
    return (
        <div>
           <Card id={people[0].id} name={people[0].name} email={people[0].email} />
        </div>
    );
} 

export default Cardlist;
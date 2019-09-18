import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { people } from './people';

ReactDOM.render(
        <div>
           <Card gender={people[0].gender} img={people[0].img} name={people[0].name} email={people[0].email} position={people[0].position} />
           <Card gender={people[1].gender} img={people[1].img} name={people[1].name} email={people[1].email} position={people[1].position} />
           <Card gender={people[2].gender} img={people[2].img} name={people[2].name} email={people[2].email} position={people[2].position} />
           <Card gender={people[3].gender} img={people[3].img} name={people[3].name} email={people[3].email} position={people[3].position} />
           <Card gender={people[4].gender} img={people[4].img} name={people[4].name} email={people[4].email} position={people[4].position} />
           <Card gender={people[5].gender} img={people[5].img} name={people[5].name} email={people[5].email} position={people[5].position} />
           <Card gender={people[6].gender} img={people[6].img} name={people[6].name} email={people[6].email} position={people[6].position} />
           
           </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

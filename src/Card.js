import React from 'react';

const Card = (props) => {

    return (
        <div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='Business Person' src={'https://randomuser.me/api/portraits/' + props.gender + '/' + props.img + '.jpg'} />
        <div>
        <h2>{props.name}</h2>
        <h5>{props.position}</h5>
        <p>{props.email}</p>
        </div>
        </div>
    );
}
export default Card; 
import React from 'react';

const Card = ({ gender, img, name, position, email }) => {

    return (
        <div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='Business Person' src={`https://randomuser.me/api/portraits/${gender}/${img}.jpg`} />
        <div>
        <h2>{name}</h2>
        <h5>{position}</h5>
        <p>{email}</p>
        </div>
        </div>
    );
}
export default Card; 
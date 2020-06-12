import React from 'react';

const Card = ({username, name, email, id}) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200" alt="robot`} alt="robots"/>
            <div>
                <h2>{username}</h2>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
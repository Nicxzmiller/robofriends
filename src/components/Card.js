import React from "react";

const Card = ({name, email, id, username}) => {
    return(
        <div className="bg-light-green pa3 dib br4 ma2 grow bw2 shadow-5 tc ">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
import React from "react";

const Random = ({min,max}) => {
    let randomNum = null;
        randomNum = Math.floor((max-min)* Math.random()) + min
    return (
        <div className="randomNumber">
            Random value between {min} and {max} is {randomNum}
        </div>
    )
}

export default Random;
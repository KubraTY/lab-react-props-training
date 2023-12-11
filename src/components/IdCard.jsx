import React from "react";

const IdCard = ({lastName, firstName, gender, height, birth, picture}) =>{
    return(
        <div className="userCard">
            <div className="picture">
                <img src={picture} alt="picture" />
            </div>
            <ul>
                <li>
                    <b>First Name:</b> {firstName}
                </li>
                <li>
                    <b>Last Name:</b> {lastName}
                </li>
                <li>
                    <b>Gender:</b> {gender}
                </li>
                <li>
                    <b>Height:</b> {height} m
                </li>
                <li>
                    <b>Birth:</b>  {birth.toDateString()}
                </li>
            </ul>
        </div>
    )
}

export default IdCard;
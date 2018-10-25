import React from "react";
import "./ProfileCard.css";

const ProfileCard = props => (  
    <div id="people">
    
        <div className="card">
        <span className="border border-success">
            <div className="img-container">
                <img className="profile-pic" alt={props.name} src={props.image}/>
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>{props.firstName} {props.lastName}</strong> {props.age}
                    </li>
                    <li>
                        <strong>Age: </strong> {props.age}
                    </li>
                    <li>
                        <strong>Neighborhood: </strong> {props.neighborhood}
                    </li>
                    <li>
                        <strong>Gender: </strong> {props.gender}
                    </li>
                    <li>
                        <strong>Interested In: </strong> {props.genderInterest}
                    </li>
                </ul>
            </div>
            </span>
        </div>
        
    </div>

);


export default ProfileCard;


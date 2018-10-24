import React from "react";
import "./DateApp.css";

const DateApp = props => (  
    <div id="people">
    
        <div className="card">
        <span className="border border-success">
            <div className="img-container">
                <img className="profile-pic" alt={props.name} src={props.image}/>
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>{props.name}, </strong> {props.age}
                    </li>
                    <li>
                        <strong>Neighborhood: </strong> {props.neighborhood}
                    </li>
                </ul>
                <div id="control">
                    <div className="button-no">
                        <button type="button" className="btn btn-danger" onClick={() => props.releaseMatch(props.id)}>Remove {props.name}</button>
                        <button type="button" className="btn btn-primary" onClick={() => props.setMatch(props.id)}>Cast Your Line {props.name}</button>
                    </div>
                </div>
            </div>
            </span>
        </div>
        
    </div>

);


export default DateApp;


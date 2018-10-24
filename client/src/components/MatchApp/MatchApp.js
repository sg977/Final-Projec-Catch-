import React from "react";
import "./MatchApp.css";

const MatchApp = props => (  

<div class="card">
  <div class="card-body">
  <p>{props.name} </p>
  <img className="match-pic" alt={props.name} src={props.image}/>
  <p>{props.surname}</p>
  <button type="button" className="btn btn-primary" onClick={() => props.setMatch(props.id)}>Message {props.name}!</button>
  <button type="button" className="btn btn-danger" onClick={() => props.releaseMatch(props.id)}>Remove {props.name}</button>
  </div>
</div>

);


export default MatchApp;


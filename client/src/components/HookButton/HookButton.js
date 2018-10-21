import React from 'react';


const HookButton = props => (
    <button 
        onClick={() => props.handleHook()}
        type="button"
        className="btn btn-primary"
        >{props.hooked}</button>
)

export default HookButton;
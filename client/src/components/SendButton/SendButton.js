import React from 'react';

const SendButton = props => (
    <button 
        onClick={() => props.handleSend()}
        type="button"
        className="btn btn-primary"
        >Send</button>
    )

export default SendButton;
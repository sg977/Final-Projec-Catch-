import React from 'react';
import './MessageText.css';

const MessageText = props => (
    <div>
        <form>
   
            <input
                value={props.inputText}
                onChange={props.messageInput}
                type="text"
                className="form-control"
                // onSubmit={() => props.handleSend()}
                
                
            />
        </form>
    </div>
)

export default MessageText;
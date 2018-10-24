import React from 'react';
import './MessageText.css';

const MessageText = props => (
    <div>
        <form>
            <input
                value={props.inputText}
                onChange={props.messageInput}
                onSubmit={() => props.handleSend()}
                type="text"
                className="form-control" 
                >
            </input>
        </form>
    </div>
)

export default MessageText;
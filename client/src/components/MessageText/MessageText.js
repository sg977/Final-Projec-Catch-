import React from 'react';
import './MessageText.css';

const MessageText = props => (
    <div>
        <form>
            <input
                type="text" className="form-control" value={props.inputText} onChange={props.messageInput}>
            </input>
        </form>
    </div>
)

export default MessageText;
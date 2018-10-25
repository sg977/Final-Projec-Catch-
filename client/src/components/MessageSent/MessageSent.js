import React from 'react';
import './MessageSent.css';

const MessageSent = props => (
    <div className="card sent">
      <div className="card-body sent">
        {props.text}
      </div>
    </div>
    )

export default MessageSent;
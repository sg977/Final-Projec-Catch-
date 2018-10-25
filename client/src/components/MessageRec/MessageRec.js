import React from 'react';
import './MessageRec.css';

const MessageRec = props => (
<div className="card">
  <div className="card-body received">
    {props.text}
  </div>
</div>
)

export default MessageRec;
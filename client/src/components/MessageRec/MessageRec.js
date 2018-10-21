import React from 'react';
import './MessageRec.css';

const MessageRec = props => (
<div className="card received">
  <div className="card-body">
    {props.text}
  </div>
</div>
)

export default MessageRec;
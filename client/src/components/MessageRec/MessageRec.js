import React from 'react';
import './MessageRec.css';

const MessageRec = props => (
<div className="card rec-disp">
  <div className="card-body received">
    {props.text}
  </div>
</div>
)

export default MessageRec;
import React from 'react';
import './ChatPartner.css';

const ChatPartner = props => (
<div className="card received">
  <div className="card-body">
    {props.partner}
  </div>
</div>
)

export default ChatPartner;
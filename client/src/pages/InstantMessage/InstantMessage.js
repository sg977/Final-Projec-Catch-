import React, { Component } from 'react';
import './InstantMessage.css';
import msgs from './messages-obj.json';
import MessageSent from '../../components/MessageSent';
import MessageRec from '../../components/MessageRec';
import MessageText from '../../components/MessageText';
import SendButton from '../../components/SendButton';
import HookButton from '../../components/HookButton';

class InstantMessage extends Component {

  state = {
    msgs,
    messages: [],
    inputText: "",
    user: 1,
    room: 0,
    status: "unhooked",
    newChat: true,
    messageText: ""
  }

  componentDidMount() {
    console.log("Component Mounted");
    for(let i = 0; i < msgs.length; i++) {
      this.state.messages.push(msgs[i]);
    }
    if(msgs.length > 0) {
      this.setState({
        newChat: true
      })
    }
    console.log(this.state.messages)
  }

  handleSend = () => {
    console.log("msg sent");
    console.log(this.state.messageText)
    this.state.messages.push(
      {
        senderID: this.state.user,
        text: this.state.inputText
      }
    )
    this.setState({
      messages: this.state.messages,
      inputText: ""
    })
    console.log(this.state.messages)
    
  };

  messageInput = event => {
    this.setState({
      inputText: event.target.value
    });
    // console.log(this.state.inputText);
  }

  handleHook = () => {
    console.log("status change")
    if(this.state.status === "unhooked") {
      this.setState({
        status: "hooked"
      })
    } else {
      this.setState({
        status: "unhooked"
      })
    }
  } 

  render() {
    return (
      <div className="App">
        <div className="card">
          <div className="card-body">
            {this.state.messages.map(message => 
                this.state.user === message.senderID ? (
                  <MessageSent
                    text={message.text}
                  />
                ) : (
                  <MessageRec
                  text={message.text}
                />
                )
            )}
          </div>
            <MessageText
              value={this.inputText}
              messageInput={this.messageInput}
            />
            <SendButton 
              handleSend={this.handleSend}
            />
            <HookButton
              handleHook={this.handleHook}
              hooked={this.state.status}
            />
        </div>
      </div>
    );
  }
}

export default InstantMessage;

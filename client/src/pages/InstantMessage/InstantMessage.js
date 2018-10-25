import React, { Component } from 'react';

import './InstantMessage.css';
// import msgs from './messages-obj.json';
import ChatPartner from '../../components/ChatPartner';
import MessageSent from '../../components/MessageSent';
import MessageRec from '../../components/MessageRec';
import MessageText from '../../components/MessageText';
import SendButton from '../../components/SendButton';
import HookButton from '../../components/HookButton';
import API from '../../utils/API';


class InstantMessage extends Component {

  state = {
    msgs: [],
    messages: [],
    inputText: "",
    user: 1,
    partnerID: "Chat with Jenny",
    parterName: "",
    room: "5bd100b3729fb2ca8dc4197c",
    hooked: null,
    newChat: null,
    chat: []
  }

  componentDidMount() {
    console.log("Component Mounted");
    this.loadRoomData();
  }

  loadRoomData = () => {
    API.getRoom(this.state.room)
      .then(res =>
        this.setState({
            messages: res.data[0].messages,
            hooked: res.data[0].hooked,
            user: res.data[0].userOne,
            
          }))
          .catch(err => console.log(err));
  };

  loadPartnerName = () => {
    API.getUser(this.state.partnerID)
      .then(res => 
        this.setState({
          parterName: res.data
        })
        )
        .catch(err => console.log(err))
  }

  loadPartnerID = () => {
    API.getRoom(this.state.room)
      .then(res =>
        this.checkUser(res.data[0].userOne, res.data[0].userTwo)
        )
        .catch(err => console.log(err))
  };

  checkUser = (a, b) => {
    if(this.state.user == a) {
      this.setState({
        partnerID: b
      })
    } else {
      this.setState({
        partnerID: a
      })
    }
  }

  handleSend = () => {
    console.log("msg sent");
    API.addMessage(this.state.room, {text: this.state.inputText, senderID: this.state.user});
    this.loadRoomData();
    console.log(this.state.inputText)
  };

  messageInput = event => {
    this.setState({
      inputText: event.target.value
    });
  }

  handleHook = () => {
    if(this.state.hooked) {
      this.setState({
        hooked: false
      })
      API.changeStatus(this.state.room, {hooked: false})
      console.log(this.state.room, this.state.hooked)
    } else {
      this.setState({
        hooked: true
      })
      API.changeStatus(this.state.room, {hooked: true})
      console.log(this.state.room, this.state.hooked)
    }
  } 

  render() {
    return (
      <div className="App">
        <div className="card main-disp">
          <div className="partner-disp">
            <ChatPartner 
              partner={this.state.partnerID}
            />
            </div>
          <div className="card-body msgs-disp">
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
              value={this.state.inputText}
              messageInput={this.messageInput}
            />
            <SendButton 
              handleSend={this.handleSend}
            />
            {this.state.hooked ? (  
              <HookButton      
                  handleHook={this.handleHook}
                  hooked={"Hooked"}
                  />) : (
                  <HookButton      
                  handleHook={this.handleHook}
                  hooked={"Unhooked"}
                  />
                )}
                {console.log(this.state.parterName)}
        </div>
      </div>
    );
  }
}

export default InstantMessage;

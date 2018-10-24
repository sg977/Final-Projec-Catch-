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
    partnerID: 2,
    parterName: "",
    room: "5bcfa26f27963fa26bb7d284",
    hooked: null,
    newChat: null,
    chat: []
  }

  // state = {
  //   msgs: [],
  //   messages: [],
  //   inputText: "",
  //   user: 1,
  //   room: 0,
  //   hooked: false,
  //   newChat: true
  // }

  componentDidMount() {
    console.log("Component Mounted");
        this.loadRoomData();
        this.loadPartnerID();
        this.loadPartnerName();
  };

  // loadMessages = (msgs) => {
  //   for(let i = 0; i < msgs.length; i++) {
  //     this.state.messages.push(msgs[i]);
  //   }
  //   if(msgs.length === 0) {
  //     this.setState({
  //       newChat: true
  //     })
  //   } else {
  //     this.setState({
  //       newChat: false
  //     })
  //   }
  //   console.log(this.state.messages)
  // }

  loadRoomData = () => {
    API.getRoom(this.state.room)
      .then(res =>
        this.setState({
            messages: res.data[0].messages,
            hooked: res.data[0].hooked,
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

  // recentMessages = (arr) => {
  //   arr.slice(1).slice(-5)    
  //   this.setState({ messages: arr })
  // }

  // loadMessages = () => {
  //   for(let i = 0; i < msgs.messages.length; i++) {
  //     this.state.messages.push(msgs[i]);
  //   }
  //   if(msgs.length === 0) {
  //     this.setState({
  //       newChat: true
  //     })
  //   } else {
  //     this.setState({
  //       newChat: false
  //     })
  //   }
  //   console.log(this.state.messages)
  // }

  handleSend = () => {
    console.log("msg sent");
    // this.state.messages.push(
    //   {
    //     senderID: this.state.user,
    //     text: this.state.inputText
    //   }
    // )
    // this.setState({
    //   messages: this.state.messages,
    //   inputText: ""
    // })
    // console.log(this.state.messages)
    
    API.addMessage(this.state.room, {text: this.state.inputText, senderID: this.state.user})
    this.loadRoomData();
  };

  messageInput = event => {
    this.setState({
      inputText: event.target.value
    });
    // if(this.state.inputText === "") {
    //   this.setState({
    //     inputText: ""
    //   })
    // }
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
        <div className="card">
        <ChatPartner 
          partner={this.state.partnerID}
        />
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
              value={this.inputText}
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

import React, { Component } from 'react';
import './InstantMessage.css';
// import msgs from './messages-obj.json';
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
    room: "5bcfa26f27963fa26bb7d284",
    hooked: false,
    newChat: null
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
        // this.loadMessages();
        // .then(res => this.loadMessages(res.data))
        // console.log(this.state.msgs);
        // .then(res => this.loadMessages(res));
        // const {msgs} = this.state
        // loadRoom = () => {
        //   API.getRoom(this.state.room)
        //     .then(res =>
        //       this.setState({
        //           msgs: res.data.messages,
        //           hooked: res.data.hooked
        //         })
        //     )
        //     .catch(err => console.log(err));
        // };
        
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
            hooked: res.data[0].hooked
          })
      )
      .catch(err => console.log(err));

      
      // for(let i = 0; i < msgs.length; i++) {
      //   this.state.messages.push(msgs[i]);
      // }
      // if(msgs.length === 0) {
      //   this.setState({
      //     newChat: true
      //   })
      // } else {
      //   this.setState({
      //     newChat: false
      //   })
      // }
  };

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
    
    API.addMessage(this.state.room, {
      text: this.state.inputText,
      senderID: this.state.user
    })

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
    } else {
      this.setState({
        hooked: true
      })
    }

    API.changeStatus(this.state.room, this.state.hooked
    )

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
                {console.log(this.state.user)}
        </div>
      </div>
    );
  }
}

export default InstantMessage;

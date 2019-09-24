// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {

  state = {
    mood: "happy"
  }

  switch = () => {
    const mood = (this.state.mood==="happy") ? "sad" : "happy"
    this.setState({
      mood: mood
    })
  }


  render(){
    return <div onClick={this.switch}>{this.state.mood}</div>
  }
}

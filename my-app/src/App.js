import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state= this.clearState();
        this.handleChange = this.handleChange.bind(this);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    clearState() {
        return {
            currentSec: 60,
            isStartDisabled: false
        };
    }
    tick() {
        let second = this.state.currentSec - 1;
        this.setState({
            currentSec: second
        });
        if (second < 1) {
            clearInterval(this.interval);
        }
    }
    handleResetClick() {
        clearInterval(this.interval);
        this.setState(this.clearState());
    }
    handleStartClick() {
        this.interval = setInterval(()=> this.tick(),1000);
        this.setState({
            isStartDisabled: true
        });
    }
    handleChange(event) {
        this.setState({currentSec: event.target.value});
    }


  render() {
    var value = this.state.value;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Little Timer</h2>
        </div>
        <div className="APP-body">
            <div className="TimeInput">
                <input
                    id="time"
                    type="number"
                    min="0"
                    value={this.state.currentSec}
                    disabled={this.state.isStartDisabled}
                    onChange={this.handleChange} />
            </div>
            <br/>
            <button
                className="Timer-button"
                id="start"
                disabled={this.state.isStartDisabled}
                onClick={this.handleStartClick}>
                start
            </button>
            <button
                className="Timer-button"
                id="restart"
                onClick={this.handleResetClick}>
                restart
            </button>
        </div>
      </div>
    );
  }
}

export default App;

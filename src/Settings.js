import React, { Component, PropTypes } from "react";
import LabeledInput from "./LabeledInput";
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  container: {
    border: "1px solid grey",
    borderRadius: "4px",
    padding: "10px",
    margin: "15px"
  },
  submitButton: {
    marginTop: "10px"
  }
}

export default class Settings extends Component {
  static propTypes = {
    onStart: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.state = {
      duration: 10,
      cycleCount: 5,
      break: 5,
    };

    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeCycleCount = this.onChangeCycleCount.bind(this);
    this.onChangeBreak = this.onChangeBreak.bind(this);
    this.onStart = this.onStart.bind(this);
  }

  onChangeDuration(value) {
    this.setState({
      duration: value
    });
  }

  onChangeCycleCount(value) {
    this.setState({
      cycleCount: value
    });
  }

  onChangeBreak(value) {
    this.setState({
      break: value
    });
  }

  onStart() {
    this.props.onStart(this.state)
  }

  render() {
    return (
      <div style={style.container}>
        <h1>Settings</h1>
        <LabeledInput
          label="Duration"
          value={this.state.duration}
          onChange={this.onChangeDuration}
        />
        <LabeledInput
          label="Cycle count"
          value={this.state.cycleCount}
          onChange={this.onChangeCycleCount}
        />
        <LabeledInput
          label="Break"
          value={this.state.break}
          onChange={this.onChangeBreak}
        />
        <RaisedButton 
          label="Start" 
          style={style.submitButton}
          primary
          fullWidth
          onClick={this.onStart}
        />
      </div>
    );
  }
}

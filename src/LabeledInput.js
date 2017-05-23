import React, { Component, PropTypes } from 'react';

const style = {
  container: {
    margin: "10px"
  },
  input: {
    width: "150px",
    borderRadius: "3px",
    padding: "3px",
    border: "1px solid grey"
  }
}

export default class LabeledInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    value: 20,
  }

  constructor() {
    super();
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    this.props.onChange(Number(event.target.value));
  }

  render() {
    return (
      <div style={style.container}>
        <label>
          {this.props.label} <br />
          <input
            style={style.input} 
            type="number"
            value={this.props.value}
            onChange={this.onChangeValue}
          />
        </label>
      </div>
    )
  }
}
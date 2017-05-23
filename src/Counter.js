import React, {Component, PropTypes} from 'react';

export default class Counter extends Component {
  static propTypes = {
    settings: PropTypes.object,
    started: PropTypes.bool.isRequired
  }

  constructor(){
    super();
    this.state = {
      timeRemain: 0
    }
  }

  componentWillUpdate(nextProps) {
    if(nextProps.started && !this.props.started) {
      this.setState({
        timeRemain: nextProps.settings.duration
      });

      const tick = setInterval(() => {
        if(this.state.timeRemain > 0) {
          this.setState({
            timeRemain: this.state.timeRemain - 1
          })
        } else {
          clearInterval(tick)
        }
      }, 1000);
    }
  }

  render() {
    if(this.props.started) {
      return <h1>{this.state.timeRemain}</h1>
    } else {
      return <h1>Appka nejede</h1>
    }
  }
}
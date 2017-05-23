import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Settings from "./Settings";
import Counter from './Counter';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      settings: null,
      started: false
    };

    this.onStart = this.onStart.bind(this);
  }

  onStart(settings) {
    this.setState({
      settings: settings,
      started: true
    });
    console.log("App started", settings);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Settings onStart={this.onStart} />
          <Counter 
            settings={this.state.settings}
            started={this.state.started}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

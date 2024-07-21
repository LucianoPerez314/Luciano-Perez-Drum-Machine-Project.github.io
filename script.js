// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
import React from "https://esm.sh/react@18.3.1";
import ReactDOM from "https://esm.sh/react-dom@18.3.1";


const keys = [
{ label: "Q",
  audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  descriptor: "Heater 1" },
{ label: "W",
  audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  descriptor: "Heater 2" },
{ label: "E",
  audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  descriptor: "Heater 3" },
{ label: "A",
  audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  descriptor: "Heater 4" },
{ label: "S",
  audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  descriptor: "Clap" },
{ label: "D",
  audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  descriptor: "Open-HH" },
{ label: "Z",
  audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  descriptor: "Kick-n'-Hat" },
{ label: "X",
  audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  descriptor: "Kick" },
{ label: "C",
  audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  descriptor: "Closed-HH" }];

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick(event) {
    const audio = event.target.querySelector("audio");
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    this.props.onInput(audio.innerText);
  }

  handleKeyDown(event) {
    const audio = document.querySelector(`#${event.key.toUpperCase()}`);
    if (audio !== null) {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
      this.props.onInput(audio.innerText);
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }


  render() {
    const keyButtons = this.props.keys.map((key) => /*#__PURE__*/
    React.createElement("button", { onClick: this.handleClick, class: "drum-pad", id: key.descriptor }, /*#__PURE__*/
    React.createElement("audio", { class: "clip", id: key.label, src: key.audio }, key.descriptor),
    key.label));


    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-pad" },
      keyButtons));


  }}


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "" };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(text) {
    this.setState({ input: text });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement(DrumPad, { keys: this.props.keys, onInput: this.handleInput }), /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.input)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, { keys: keys }), document.querySelector(".container-fluid"));
import React, {Component} from 'react';


class App extends Component {
  myForm = React.createRef();
  myInput = React.createRef();
  state = {inputValue: ''};

  render() {
    this.myInput.current && console.log(this.myInput.current.value);
    return (
        <div>
          <form action={'/savedata'} onSubmit={this.send} ref={this.myForm}>
            <input value = {this.state.inputValue} type='number' onInput={this.commitState} ref={this.myInput}/>
            <button>send</button>
          </form>

        </div>
    );
  }

  send = (e) => {
    e.preventDefault();
    // console.log(this.myForm.current[0].value);
    console.log(e.target.children[0].value);

  };

  commitState = (e) => {
    this.setState({inputValue: e.target.value});
    // console.log(this.state.inputValue);
  };
}

export default App;

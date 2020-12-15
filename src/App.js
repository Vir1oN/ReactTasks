import React, {Component} from 'react';
import User from "./Components/User";

class App extends Component {
  myForm = React.createRef();
  state = {inputValue: '', users: []};

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((json) => {
              this.setState({users: json});
            }
        );
  }

  render() {
    let {inputValue, users} = this.state;
    return (
        <div>
          <form action={'/savedata'} onSubmit={this.send} ref={this.myForm}>
            <input value = {this.state.inputValue} type='number' onInput={this.commitState}/>
            <button>send</button>
          </form>

          <div>
            {inputValue && <User item = { users.find(user => user.id === +inputValue)} key = {inputValue}/>}
          </div>
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

import React, { Component } from 'react';

class MessyComponent1 extends Component {
  constructor() { super();
    var doYouNeedThis = 0;
    this.state = {message: "Good Job! You did it :)"};
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}
        </h1></div>
    );
  }
}

export default MessyComponent1;

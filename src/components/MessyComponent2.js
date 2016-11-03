import React from 'react';
import MessyComponent3 from './MessyComponent3';

class MessyComponent2 extends Component {

  render() {
    var message='Way to go'; return (
      <div>
        <MessyComponent3 imageSrc="http://richestcelebrities.org/wp-content/uploads/2014/10/Jackie-Chan-Net-Worth.jpg"
          altText="JackieChan"/>
      </div>
    );
  }
}

export default MessyComponent2;

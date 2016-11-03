import React, { Component, PropTypes } from 'react';

class MessyComponent3 extends Component {
  render() {
    return (<div><img src={this.props.imageSrc} alt={this.props.altText} /></div>
    );
  }
}

MessyComponent3.propTypes = {
  imageSrc: PropTypes.string,
};
export default MessyComponent3;

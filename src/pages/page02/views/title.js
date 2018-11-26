import React, {Component} from 'react';

class Title extends Component {
  render() {
    return (
      <h1 className="page02-title">{this.props.title}</h1>
    );
  }
}

export default Title;

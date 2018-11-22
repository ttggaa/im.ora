import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Classifies extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getOwnState = this.getOwnState.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      classifies: this.context.store.getState().classifies
    };
  }

  render() {
    const {classifies} = this.state;

    return (
      <div className="classifies">
	{
	  classifies.map((item, index) => {
	    return (
	      <a key={index} href={item.href}>
		<i></i>
		<span>{item.title}</span>
	      </a>
	    );
	  })
	}
      </div>
    );
  }
}

Classifies.contextTypes = {
  store: PropTypes.object
};

export default Classifies;

import React from 'react';
import Header from './header.js';
import List from './list.js';

import './style.css';

class Section extends React.Component {
  render() {
    return (
      <section>
	<Header headerState={this.props} />
	<List listState={this.props}/>
      </section>
    );
  }
}

export default Section;

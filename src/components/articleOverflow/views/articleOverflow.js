import React from 'react';
import PropTypes from 'prop-types';
import {hideArticleOverflow} from '../actions.js';

import './style.css';

class ArticleOverflow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getOwnState = this.getOwnState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      articleOverflow: this.context.store.getState().articleOverflow
    };
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  onClick() {
    this.context.store.dispatch(hideArticleOverflow());
  }

  componentDidMount() {
    this.setState({
      unsubscribe: this.context.store.subscribe(this.onChange)
    });
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  render() {
    const hideState = this.state.articleOverflow.hide;
    return (
      <div className={`${hideState ? 'article-overflow hidden' : 'article-overflow'}`}>
	<span onClick={this.onClick}>点击展开全文</span>
	<i></i>
      </div>
    );
  }
}

ArticleOverflow.contextTypes = {
  store: PropTypes.object
};

export default ArticleOverflow;

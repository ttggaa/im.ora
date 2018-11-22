import React from 'react';
import {view as ArticleList} from '../../../../../components/articleList/';

class ListContainer extends React.Component {
  render() {
    const {sectionType} = this.props.listState;
    const {sectionHref} = this.props.listState;

    if (sectionType === 'page') {  // 渲染 page 的 section
      return (
	<div className="section-list">
	  <a className="section-list-item" href={sectionHref}>
	    <div className="section-list-item-text">
	      <h3>{this.props.listState.h3}</h3>
	      <p>{this.props.listState.des}</p>
	    </div>
	    <div className="section-list-item-image">
	      <span className="section-list-item-image-mask"></span>
	      <img src={this.props.listState.image} alt="文章配图" />
	    </div>
	  </a>
	</div>
      );
    }

    // 渲染 article 的 section
    return (
      <div>
	{
	  this.props.listState.list.map((listItem, listIndex) => {
	    if (listIndex > 2) return null;
	    return (
	      <ArticleList 
		key={listIndex}
		articleUrl={`./${listItem.url}`}
		articleTitle={listItem.title}
		articleDescription={listItem.description}
		articleImage={listItem.image}
	      />
            );
	  })
	}
      </div>
    );
  }
}

export default ListContainer;

import React from 'react';
import PropTypes from 'prop-types';


const Header = ({href, title}) => (
  <a className="section-header-title" href={href}>
    <span>{title}</span>
  </a>
);
Header.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

// const Nav = ({navItem, url}) => (
//   <a className="section-header-nav-item" href={url}>
//     <span>{navItem}</span>
//     <i></i>
//   </a>
// );
// Nav.propTypes = {
//   navItem: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired
// };

class HeaderContainer extends React.Component {
  render() {
    // const {sectionNav} = this.props.headerState;
    return (
      <div className="section-header">
	<Header
	  href={this.props.headerState.sectionHref}
	  title={this.props.headerState.sectionTitle}
	/>
	{/*<div className="section-header-nav">
	  {
	    sectionNav.map((item, index) => {
	      return <Nav key={index} navItem={item.text} url={item.url}/>;
	    })
	  }
	</div>*/}
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  headerState: PropTypes.object.isRequired
};

export default HeaderContainer;

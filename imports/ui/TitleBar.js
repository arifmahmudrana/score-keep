import React from "react";
import PropTypes from 'prop-types';

const TitleBar = ({title, subTitle}) => (
  <div className="title-bar">
    <div className="wrapper">
      <h1>{title}</h1>
      {subTitle && <h2 className="title-bar__subtitle">{subTitle}</h2>}
    </div>
  </div>
)

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};

// TitleBar.defaultProps = {
//   title: `Score Keep`,
// };

export default TitleBar;
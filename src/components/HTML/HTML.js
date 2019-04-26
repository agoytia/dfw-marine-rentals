import React from 'react';
import PropTypes from 'prop-types';

const HTML = ({ children, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: children }} />
);

export const Content = ({ children, className }) => (
  <div className={className}>{children}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTML.propTypes = Content.propTypes;

export default HTML;

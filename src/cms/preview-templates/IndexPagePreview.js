import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        excerpt={widgetFor('body')}
        image={getAsset(data.image)}
        title={data.title}
      />
    );
  } else {
    return (<div>Loading...</div>);
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func
};

export default IndexPagePreview;

import React from 'react'
import PropTypes from 'prop-types'

import { ProductTemplate } from '../../templates/product-page';

const ProductPreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ProductTemplate
        body={widgetFor('body')}
        image={getAsset(data.image)}
        title={data.title}
      />
    );
  } else {
    return (<div>Loading...</div>);
  }
};

ProductPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ProductPreview;
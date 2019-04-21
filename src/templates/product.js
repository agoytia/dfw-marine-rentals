import React from 'react';

import classNames from 'classnames';

const Product = (props) => {
  const {
    body,
    id,
    image = {},
    title
  } = props;

  const className = classNames(
    'spotlight style1',
    {'orient-right': !(id % 2)},
    {'orient-left': id % 2},
    'content-align-left image-position-center onscroll-image-fade-in'
  );

  const sectionProps = {className};
  if (id === 0) sectionProps.id = 'first';

  return (
    <section {...sectionProps}>
      <div className="content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="image">
        <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt="" />
      </div>
    </section>
  );
};

export default Product;
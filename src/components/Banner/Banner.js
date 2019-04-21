import React from 'react';

const Banner = (props) => {
  const {
    body,
    image = {},
    title
  } = props;

  return (
    <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
      <div className="content">
        <h1>{title}</h1>
        {body}
        <ul className="actions stacked">
          <li><a href="#first" className="button large wide smooth-scroll-middle">Go to jetskis</a></li>
        </ul>
      </div>
      <div className="image">
        <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}/>
      </div>
    </section>
  );
};

export default Banner;
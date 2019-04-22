import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Link } from "gatsby"

import Layout from '../components/Layout';

export const ProductTemplate = (props) => {
  const {
    body,
    image = {},
    title
  } = props;

  return (
    <Fragment>
      {/*<section className="banner style3 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">*/}
      <section className="spotlight style2 orient-left content-align-left image-position-center onscroll-image-fade-in">
        <div className="content">
          <h1>{title}</h1>
          {body}
        </div>
        <div className="image">
          <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}/>
        </div>
      </section>
      <section className="wrapper style1 align-center">
        <div className="inner">
          <div className="index align-left">
            <section>
              <header>
                <h3>Form</h3>
              </header>
              <div className="content">

                <form
                  method="post"
                  action="#"
                >
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name"/>
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" placeholder="validEmail@emailserver.com"/>
                    </div>
                    <div className="field half">
                      <label htmlFor="phone">Phone</label>
                      <input type="tel" name="phone" id="phone" placeholder="(888) 555-1234"/>
                    </div>
                    <div className="field">
                      <label htmlFor="model">Model</label>
                      <input type="text" name="model" id="model" value={title}/>
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" rows="6"/>
                    </div>
                  </div>
                  <ul className="actions">
                    <li><input className="button primary large wide" type="submit" name="submit" id="submit" value="Send Message"/></li>
                    <li><Link to="/" className="button large wide smooth-scroll-middle">Return Home</Link></li>
                  </ul>
                </form>

              </div>
            </section>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

ProductTemplate.propTypes = {
  body: PropTypes.string,
  image: PropTypes.shape(),
  title: PropTypes.string
};

const ProductPage = ({ data }) => {
  const {
    excerpt,
    frontmatter
  } = data.markdownRemark;

  return (
    <Layout>
      <ProductTemplate
        body={excerpt}
        image={frontmatter.image}
        title={frontmatter.title}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProductPage;

export const pageQuery = graphql`
  query ProductsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
     id
     excerpt
     html
     frontmatter {
       title
       image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
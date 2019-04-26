import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { navigate } from 'gatsby-link'

import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export class ProductTemplate extends Component {
  handleSubmit = form => {
    const {
      formName,
      formAction,
      ...values
    } = form;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': formName,
        ...values,
      }),
    })
      .then(() => navigate(formAction))
      .catch(error => alert(error))
  };

  render() {
    const {
      body,
      image = {},
      title
    } = this.props;

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
        <ContactForm
          formName="BookingRequestForm"
          title="Booking Request Form"
          product={title}
          onSubmit={this.handleSubmit}
        />
      </Fragment>
    );
  }
}

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
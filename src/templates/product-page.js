import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { navigate } from 'gatsby-link'

import ContactForm from '../components/ContactForm';
import HTML, { Content } from '../components/HTML';
import Layout from '../components/Layout';
import { encode } from '../utilities';

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
      content,
      contentComponent,
      image = {},
      title
    } = this.props;

    const ProductDescription = contentComponent || Content;
    return (
      <Fragment>
        {/*<section className="banner style3 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">*/}
        <section className="spotlight style2 orient-left content-align-left image-position-center onscroll-image-fade-in">
          <div className="content">
            <h1>{title}</h1>
            <ProductDescription>{content}</ProductDescription>
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
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.shape(),
  title: PropTypes.string
};

const ProductPage = ({ data }) => {
  const {
    html,
    frontmatter
  } = data.markdownRemark;

  return (
    <Layout>
      <ProductTemplate
        content={html}
        contentComponent={HTML}
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
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { navigate } from 'gatsby-link'
import isEmpty from 'lodash/isEmpty';
import DatePicker from 'react-datepicker';

import ContactForm from '../components/ContactForm';
import HTML, { Content } from '../components/HTML';
import Layout from '../components/Layout';
import { encode, noop } from '../utilities';

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
      datesBooked,
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
            <div className="index align-left">
              <section>
                <header>Availability</header>
                <div className="content">
                  <DatePicker
                    excludeDates={datesBooked}
                    fixedHeight
                    dropdownMode="scroll"
                    inline
                    onChange={noop}
                    readOnly
                  />
                </div>
              </section>
            </div>
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
  datesBooked: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.shape(),
  title: PropTypes.string
};

const ProductPage = ({ data }) => {
  const {
    html,
    frontmatter
  } = data.markdownRemark;

  let datesBooked = [];
  if(!isEmpty(frontmatter.datesBooked)) {
    datesBooked = frontmatter.datesBooked.map(date => new Date(date));
  }

  return (
    <Layout>
      <ProductTemplate
        content={html}
        contentComponent={HTML}
        datesBooked={datesBooked}
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
       datesBooked
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
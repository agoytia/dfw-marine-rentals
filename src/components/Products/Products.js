import React, { Component } from 'react';

import classNames from 'classnames';
import {graphql, Link, StaticQuery } from 'gatsby'
import isEmpty from 'lodash/isEmpty';
import DatePicker from 'react-datepicker';

import HTML from '../HTML';
import noop from '../../utilities/noop';

class Products extends Component {
  render() {
    const {
      data: {
        allMarkdownRemark: {
          edges: products
        }
      }
    } = this.props;

    return products.map(({ node }, index) => {
      const className = classNames(
        'spotlight style1',
        {'orient-right': !(index % 2)},
        {'orient-left': index % 2},
        'content-align-left image-position-center onscroll-image-fade-in'
      );

      const sectionProps = {className};
      if (index === 0) sectionProps.id = 'first';

      const { datesBooked, image, title } = node.frontmatter;
      const { slug } = node.fields;

      let excludeDates = [];

      if(!isEmpty(datesBooked)) {
        excludeDates = datesBooked.map(date => new Date(date));
      }

      return (
        <section key={title} id={node.id} {...sectionProps}>
          <div className="content">
            <h2>{title}</h2>
            <HTML>{node.html}</HTML>
            <div className="index align-left">
              <section>
                <header>Availability</header>
                <div>
                  <DatePicker
                    dropdownMode="scroll"
                    excludeDates={excludeDates}
                    fixedHeight
                    inline
                    onChange={noop}
                    readOnly
                  />
                </div>
              </section>
            </div>
            <hr />
            <Link to={slug} className="button large wide smooth-scroll-middle">Request to book</Link>
          </div>
          <div className="image">
            <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt="" />
          </div>
        </section>
      );
    });
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query productsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "product-page" } } }
        ) {
          edges {
            node {
              html
              id
              fields {
                slug
              }
              frontmatter {
                datesBooked
                image {
                  childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
                title
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Products data={data} count={count} />}
  />
);
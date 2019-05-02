import React, { Component } from 'react';

import classNames from 'classnames';
import {graphql, Link, StaticQuery } from 'gatsby'

import HTML from '../HTML';

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

      const { image, title } = node.frontmatter;
      const { slug } = node.fields;

      return (
        <section key={title} id={node.id} {...sectionProps}>
          <div className="content">
            <h2>{title}</h2>
            <HTML>{node.html}</HTML>
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
import React from 'react';

import {graphql, StaticQuery } from 'gatsby'

import Product from '../../templates/product';

const Products = (props) => {
  const {
    data: {
      allMarkdownRemark: {
        edges: products
      }
    }
  } = props;

  return products.map(({node}, index) => {
    console.log(node);
    return (
      <Product
        key={node.frontmatter.title}
        id={index}
        image={node.frontmatter.image}
        body={node.excerpt}
        title={node.frontmatter.title}
      />
    )
  });
};

export default () => (
  <StaticQuery
    query={graphql`
      query productsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "product" } } }
        ) {
          edges {
            node {
              excerpt
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
)
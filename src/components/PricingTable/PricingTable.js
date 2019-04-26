import React from 'react';
import {graphql, StaticQuery} from "gatsby";

import HTML from '../HTML';

const PricingTable = (props) => {
  const {
    data: {
      allMarkdownRemark: {
        edges: products
      }
    }
  } = props;

  return (
    <section className="wrapper style1 align-center">
      <div className="inner">
        <div className="index align-left">
          <section>
            <header>
              <h3>Pricing</h3>
            </header>
            <div className="content">

              <h4>Jet skis</h4>
              <div className="table-wrapper">
                <table>
                  <thead>
                  <tr>
                    <th>Model</th>
                    <th>Description</th>
                    <th>6 hrs</th>
                    <th>1 Day</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    products
                      .filter(({ node }) => node.frontmatter.type === 'jet ski')
                      .map(({ node }) => (
                        <tr key={node.id}>
                          <td>{node.frontmatter.title}</td>
                          <td><HTML>{node.html}</HTML></td>
                          <td>${node.frontmatter.partialPrice.toFixed(2)}</td>
                          <td>${node.frontmatter.fullPrice.toFixed(2)}</td>
                        </tr>
                      ))
                  }
                  </tbody>
                </table>
              </div>

              <h4>Wakeboard boats</h4>
              <div className="table-wrapper">
                <table>
                  <thead>
                  <tr>
                    <th>Model</th>
                    <th>Description</th>
                    <th>1 Day</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    products
                      .filter(({ node }) => node.frontmatter.type === 'boat')
                      .map(({ node }) => (
                        <tr key={node.id}>
                          <td>{node.frontmatter.title}</td>
                          <td><HTML>{node.html}</HTML></td>
                          <td>${node.frontmatter.fullPrice.toFixed(2)}</td>
                        </tr>
                      ))
                  }
                  </tbody>
                </table>
              </div>

              <h4>Pontoons</h4>
              <div className="table-wrapper">
                <table>
                  <thead>
                  <tr>
                    <th>Model</th>
                    <th>Description</th>
                    <th>1 Day</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    products
                      .filter(({ node }) => node.frontmatter.type === 'pontoon')
                      .map(({ node }) => (
                        <tr key={node.id}>
                          <td>{node.frontmatter.title}</td>
                          <td><HTML>{node.html}</HTML></td>
                          <td>${node.frontmatter.fullPrice.toFixed(2)}</td>
                        </tr>
                      ))
                  }
                  <tr>
                    <td>Coming soon...</td>
                    <td></td>
                    <td>$375.00</td>
                  </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
    query productsPricingQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "product-page" } } }
        ) {
          edges {
            node {
              html
              id
              frontmatter {
                fullPrice
                partialPrice
                title
                type
              }
            }
          }
        }
      }
  `}
    render={(data, count) => <PricingTable data={data} count={count} />}
  />
);
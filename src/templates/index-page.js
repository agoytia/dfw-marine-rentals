import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

import Banner from '../components/Banner';
import GridList from '../components/GridList';
import Layout from '../components/Layout';
import Products from '../components/Products';

import '../sass/main.scss';

export const IndexPageTemplate = ({excerpt, image, title}) => {
  return (
    <Fragment>
      <Banner
        title={title}
        body={excerpt}
        image={image}
      />
      <Products />

      {/* NOTE: Check this components for more elements in ui library */}
      {/* <Additional /> */}
      <GridList />
      <footer className="wrapper style1 align-center">
        <div className="inner">
          <ul className="icons">
            <li><a href="/" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="/" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="/" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="/" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="/" className="icon style2 fa-envelope"><span className="label">Email</span></a></li>
          </ul>
          <p>&copy; DFW Marine Rentals</p>
        </div>
      </footer>
    </Fragment>
  );
};

const IndexPage = ({ data }) => {
  const {
      excerpt,
      frontmatter
  } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        excerpt={excerpt}
        image={frontmatter.image}
        title={frontmatter.title}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      excerpt
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

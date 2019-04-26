import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

import Banner from '../components/Banner';
import GridList from '../components/GridList';
import HTML, { Content } from '../components/HTML';
import Layout from '../components/Layout';
import PricingTable from '../components/PricingTable';
import Products from '../components/Products';

import '../sass/main.scss';

export const IndexPageTemplate = ({content, contentComponent, image, title}) => {
  // contentComponent is passed as a custom renderer for the content (i.e. HTML for dangerously setting
  // and handling HTML or default to the rendering the raw Content)
  const BannerContentComponent = contentComponent || Content;

  return (
    <Fragment>
      <Banner
        title={title}
        image={image}
      >
        <BannerContentComponent>{content}</BannerContentComponent>
      </Banner>

      <PricingTable />

      <Products />

      {/* NOTE: Check this components for more elements in ui library */}
      {/* <Additional /> */}
      <GridList />
    </Fragment>
  );
};

IndexPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.shape(),
  title: PropTypes.string
};

const IndexPage = ({ data }) => {
  const {
    html,
    frontmatter
  } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        content={html}
        contentComponent={HTML}
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

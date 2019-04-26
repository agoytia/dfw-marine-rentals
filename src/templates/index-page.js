import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

import Banner from '../components/Banner';
import GridList from '../components/GridList';
import HTML, { Content } from '../components/HTML';
import Layout from '../components/Layout';
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
      {/* <!-- Table --> */}
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
                    <tr>
                      <td>Yamaha Waverunner GP800</td>
                      <td>Great 2 seater for casual family fun cruising the lake.</td>
                      <td>250.00</td>
                      <td>300.00</td>
                    </tr>
                    <tr>
                      <td>Yamaha Waverunner GP1200</td>
                      <td>Very fast 2 seater for blazing across the lake. Moderate jet ski experience recommeneded.</td>
                      <td>250.00</td>
                      <td>300.00</td>
                    </tr>
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
                    <tr>
                      <td>Malibu Wakesetter LXi</td>
                      <td>11 person capacity boat with wakeboards, party cove island water mat, and tow tube available.</td>
                      <td>450.00</td>
                    </tr>
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
                    <tr>
                      <td>Coming soon...</td>
                      <td></td>
                      <td>375.00</td>
                    </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </section>
          </div>
        </div>
      </section>
      <Products />

      {/* NOTE: Check this components for more elements in ui library */}
      {/* <Additional /> */}
      <GridList />
    </Fragment>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.shape()
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

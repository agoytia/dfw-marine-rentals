import React from 'react';

import Layout from '../../components/Layout';
import {Link} from "gatsby";

const ThanksPage = () => {
  return (
    <Layout>
      <section className="wrapper style1 align-center">
        <div className="inner">
          <div className="index align-left">
            <section>
              <div className="content">
                <header>
                  <h1>Thank you for contacting us!</h1>
                  <p>We'll try and get your marine rental request processed as soon as possible.</p>
                </header>
                <p>We have received your request and will reach out to you shortly! If you don't hear from us within 24hrs, please give us a call at <a href="tel:1-817-298-8924">(817) 298-8924</a>.</p>
              </div>
            </section>
            <section>
              <ul className="actions">
                <li><Link to="/" className="button large wide smooth-scroll-middle">Return Home</Link></li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThanksPage;
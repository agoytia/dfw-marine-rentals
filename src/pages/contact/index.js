import React from 'react';

import { navigate } from 'gatsby-link'

import ContactForm from '../../components/ContactForm';
import Layout from '../../components/Layout';
import { encode } from '../../utilities';

const handleSubmit = (form) => {
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
    })
  })
    .then(() => navigate(formAction))
    .catch(error => alert(error))
};

const ContactPage = () => {
  return (
    <Layout>
      <ContactForm formName="GeneralContactForm" onSubmit={handleSubmit} />
    </Layout>
  );
};

export default ContactPage;
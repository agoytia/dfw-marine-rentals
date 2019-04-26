import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'

import {Link} from 'gatsby';

class ContactFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: '6hours',
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    this.props.onSubmit({
      formAction: form.getAttribute('action'),
      formName: form.getAttribute('name'),
      ...this.state,
      model: this.props.product
    });
  };

  render() {
    const { formName, product, title} = this.props;

    const {
      duration,
      name,
      email,
      phone,
      message
    } = this.state;

    return (
      <section className="wrapper style1 align-center">
        <div className="inner">
          <div className="index align-left">
            <section>
              <header>
                <h3>{title}</h3>
              </header>
              <div className="content">

                <form
                  name={formName}
                  method="post"
                  action="/contact/thanks"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" onChange={this.handleChange} value={name} />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="validEmail@emailserver.com"
                        onChange={this.handleChange}
                        value={email}/>
                    </div>
                    <div className="field half">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="(888) 555-1234"
                        onChange={this.handleChange}
                        value={phone}/>
                    </div>
                    {
                      product && (
                        <Fragment>
                          <div className="field half">
                            <label htmlFor="duration">Duration</label>
                            <select name="duration" id="duration" value={duration} onChange={this.handleChange}>
                              <option value="6hours">6 Hours</option>
                              <option value="fullDay">Full Day</option>
                            </select>
                          </div>
                          <div className="field">
                            <label htmlFor="model">Model</label>
                            <input type="text" name="model" id="model" onChange={this.handleChange} value={product}/>
                          </div>
                        </Fragment>
                      )
                    }
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" rows="6" onChange={this.handleChange} value={message}/>
                    </div>
                  </div>
                  <ul className="actions">
                    <li><input className="button primary large wide" type="submit" name="submit" id="submit" value="Send Message"/></li>
                    <li><Link to="/" className="button large wide smooth-scroll-middle">Return Home</Link></li>
                  </ul>
                </form>

              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

ContactFrom.propTypes = {
  formName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  product: PropTypes.string,
  title: PropTypes.string
};

ContactFrom.defaultProps = {
  onSubmit: () => {},
  product: '',
  title: 'Contact Form'
};

export default ContactFrom;
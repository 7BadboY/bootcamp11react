import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      country: '',
    };
  }

  onHandleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { name, email, country } = this.state;
    e.preventDefault();

    this.props.onSubmit({ name, email, country });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit} className={styles.form}>
        <input
          placeholder="name"
          onChange={this.onHandleInput}
          type="text"
          name="name"
        />
        <input
          placeholder="email"
          onChange={this.onHandleInput}
          type="email"
          name="email"
        />
        <input
          placeholder="country"
          onChange={this.onHandleInput}
          type="text"
          name="country"
        />
        <button className={styles.button} type="submit" >
          submit
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;

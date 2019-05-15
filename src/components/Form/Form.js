import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      country: '',
    }
  }

  onHandleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    const { name, email, country } = this.state;
    e.preventDefault();

    this.props.onSubmit({ name, email, country });
  }

  render() {
    return (
      <form action='' onSubmit={this.handleSubmit}>
        <input
          placeholder='name'
          onChange={this.onHandleInput}
          type='text'
          name='name'>
        </input>
        <input
          placeholder='email'
          onChange={this.onHandleInput}
          type='email'
          name='email'>
        </input>
        <input
          placeholder='country'
          onChange={this.onHandleInput}
          type='text'
          name='country'>
        </input>
        <button type='submit'>submit</button>
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
}

export default Form;

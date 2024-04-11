import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

    
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddContact = () => {
    const { addContact } = this.props;
    const { name, number } = this.state;

    addContact({ id: nanoid(), name, number });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div className={css.contactForm}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я]+)*$"
          title="Please enter a valid name"
          required
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter name"
          className={css.input}
        />
        <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="Enter phone number"
            className={css.input}
        />

        <button className={css.button} onClick={this.handleAddContact}>
          Add Contact
        </button>
      </div>
    );
  }
}
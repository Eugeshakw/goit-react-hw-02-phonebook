import React from 'react';
import PropTypes from 'prop-types';
export default class Contactform extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmitForm = event => {

    event.preventDefault();

    if (this.state.number === '') {
      return alert('Please enter number');
    
    }
    this.props.onAddContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  }
  render() {
    return (
      <>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            name="name"
            
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="name">Name</label>

          <input
            type="tel"
            name="number"
            placeholder="Number"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <label htmlFor="number">Number</label>

          <button type="submit">add contact</button>
        </form>
      </>
    );
  }
}

Contactform.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
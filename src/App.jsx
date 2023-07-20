import React from 'react';
import Contactform from './components/contactForm/contactForm';
import Contactslist from './components/contactList/contactList';
import { nanoid } from 'nanoid';




export class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'John Smith', number: '123-456-1234'}, 
      {id: 'id-2',  name: 'Jesica Born', number: '4566-5454-343' }, 
      {id: 'id-3', name: 'Robert Daun', number: '878-453-678'}],
    name: '',
    number: '',
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId)
    })
  }

  onAddContact = ({name, number}) => {
    if(this.state.contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number.toLowerCase() === number.toLowerCase()
    )) {
      alert(`${name} or entered number is already in contacts.`)
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,

    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],

    }))
  }

  render() {

   
    return (
      <>
        <h1 style={{fontSize: '24px', color: 'blue', textAlign: 'center' }}>Phonebook</h1>
        <Contactform  onAddContact={this.onAddContact}/>
        <h2>Contacts</h2>

        <Contactslist 
        contacts={this.state.contacts}
        deleteContact={this.deleteContact}/>

      </>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

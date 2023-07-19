import React from 'react';
import Contactform from './components/contactForm/contactForm';

export class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'John Smith', number: '123-456-1234'}, 
      {id: 'id-2',  name: 'Jesica Born', number: '4566-5454-343' }, 
      {id: 'id-3', name: 'Robert Daun', number: '878-453-678'}],
    name: '',
    number: '',
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Contactform />
        <h2>Contacts</h2>
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

import React from 'react';

const Contactslist = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
            
          );
        })}
      </ul>
    </>
  );
};

export default Contactslist;

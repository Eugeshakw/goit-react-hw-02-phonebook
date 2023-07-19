import React from "react";

const Contactslist =({contacts})=> {
    <ul>
        {contacts.map(contact=><li key={contacts.id}>
            <p>{contact.number}</p>
        </li>)}
    </ul>
};
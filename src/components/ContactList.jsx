import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const [newlyAddedContactId, setNewlyAddedContactId] = useState(null);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    if (newlyAddedContactId) {
      const timer = setTimeout(() => {
        setNewlyAddedContactId(null);
      }, 1000); // Durata animației

      return () => clearTimeout(timer);
    }
  }, [newlyAddedContactId]);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li
          key={id}
          className={id === newlyAddedContactId ? 'new-contact' : ''}
        >
          <p className="contact-info">
            <i className="fas fa-phone-alt"></i> {name}: {number}
          </p>
          <button
            className="delete-button"
            onClick={() => dispatch(deleteContact(id))}
          >
            <i className="fas fa-trash-alt"></i> Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} este deja în contacte.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <button type="submit">
        <i className="fas fa-plus-circle"></i> Add contact
      </button>
    </form>
  );
};

export default ContactForm;

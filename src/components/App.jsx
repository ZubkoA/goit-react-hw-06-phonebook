import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Header from './Header';
import { useState, useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import AddContacts from './AddContacts/AddContacts';
import { filterValue, deleteContact } from 'redux/contact/contactReducer';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const { filter, contacts } = useSelector(state => state.contact);
  const state = useSelector(state => state);
  console.log(state);

  const handleChange = e => {
    dispatch(filterValue(e.target.value));
  };

  const findFilter = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <div className={css.container}>
      <Header title="Phonebook" />
      <AddContacts />
      <Filter value={filter} onChange={handleChange} />
      <Header titleContacts="Contacts" />
      <ContactList contacts={findFilter()} deleteContact={deleteContact} />
    </div>
  );
};

export default App;

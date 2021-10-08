import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './App.module.css';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';

import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export const App = () => {
  const [contacts, setContact] = useState(() => {
    // ленивая инициализация состояния - lazy initialization
    return JSON.parse(window.localStorage.getItem('contacts' ?? ''));
  });
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = newContact => {
    newContact = {
      id: uuidv4(),
      name: newContact.name,
      number: newContact.number,
    };

    if (contacts.find(item => item.name === newContact.name)) {
      return alert(`${newContact.name + ' is already in contacts'}`);
    } else {
      setContact([...contacts, newContact]);
      return;
    }
  };

  const removeContactHandler = id => {
    setContact(contacts.filter(item => item.id !== id));
  };

  const handleFilterChange = e => {
    setFiltered(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filtered.toLowerCase();

    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook <RiContactsBook2Fill className={css.icon} />
      </h1>
      <ContactForm contacts={contacts} onSubmit={formSubmitHandler} />

      <Filter value={filtered} onChange={handleFilterChange} />
      <h2 className={css.title}>
        Contacts
        <IoMdContacts className={css.icon} />
      </h2>
      <ContactList
        contacts={filteredContacts}
        onDeleteBtnPush={removeContactHandler}
      />
    </div>
  );
};

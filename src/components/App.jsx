import { GlobalStyle } from './GlobalStyle';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, Subtitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('quiz-contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('quiz-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onChangeInput = evt => {
    setFilter(evt.currentTarget.value);
  };

  const addContact = ({ name, number }) => {
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(existingContacts => {
        const list = [...existingContacts];
        list.push({
          id: nanoid(),
          name: name,
          number: number,
        });
        return list;
      });
    }
  };

  const filterOn = () => {
    const filteredContacts = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filteredContacts)
    );
  };

  const delContact = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onChange={onChangeInput} />
      <ContactList onDeleteContact={delContact} contacts={filterOn()} />
      <GlobalStyle />
    </div>
  );
};

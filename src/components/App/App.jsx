import { Container } from "./App.styled";
import  { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Section from "components/Section/Section";
import { nanoid } from 'nanoid';
// import Notification from "components/Notification/Notification";
import Contacts from "components/Contacts/Contacts"; 

export default function App() {

    const [contacts, setContacts] = useState(() => {
        return JSON.parse(window.localStorage.getItem('contacts'))
            ?? []
    });
    const [filter, setFilter] = useState("");


    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts])
        
    const addContact = (contact) => {
        if (inDuplicate(contact)) {
             return  alert(`${contact.name}  is already in contacts.`);
        }
         const newContact = {
        id: nanoid(),
        ...contact
        }
        setContacts((prev) => ([...prev, newContact]))
    }

  const handleChange = (evt) => {
      const { value } = evt.target;
      setFilter(value)
  }
  
    const inDuplicate = ({ name, number }) => {
        const result = contacts.find((item) => item.name === name && item.number === number);
        return result;
    }

    const getFilterContacts = () => {
        if (!filter) {
            return contacts;  
        }  
        const normalizedFilter = filter.toLocaleLowerCase();
        const filterContacts = contacts.filter(({name, number}) => {
            const normalizedName = name.toLocaleLowerCase();
            const normalizedNumber = number.toLocaleLowerCase();
            const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
            return result;
        }) 
       
        return filterContacts;
    }

    const contactsFilter = getFilterContacts(contacts);


     const removeContact = (id) => {
        setContacts((prev) => {
            const newContacts = prev.filter((item) => item.id !== id);
            return newContacts
        })
         if (contactsFilter.length === 1) {
            console.log("Hi");
            setFilter("");
        }
         
    }

  return (
      <Container>
          <Section title="Phonebook">
            <ContactForm  onSubmit={addContact}/>
      </Section>
      <Contacts>
        {/* {contacts.length === 0 ?
         <Notification message="There is no contacts"></Notification> : } */}
          <Section title="Contacts">
           <Filter onChange={handleChange} filter={filter} />
            <ContactList items={contactsFilter} removeContact={removeContact} />
          </Section>
      </Contacts>
      </Container>
  )
}
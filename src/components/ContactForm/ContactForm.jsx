import PropTypes from 'prop-types';
import { Form, Input, Button } from './ContactForm.styled';
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { addContact } from 'redux/contactsSlice';
import { toast } from 'react-toastify';

export default function ContactForm() {
const [name, setName] = useState("");
const [number, setNumber] = useState("");

const contacts = useSelector(getContacts);
const dispatch = useDispatch();

  const nameId = nanoid();
  const numberId = nanoid();


  const handleChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
       case 'number':
        setNumber(value);
        break;
    
      default:
        return;
    }
  }
  
  const handleSubmit = (evt) => {
        evt.preventDefault();
        onAddContact({ name, number });
        setName("");
        setNumber("");
    }


const onAddContact = (contact) => {
        if (inDuplicate(contact)) {
          return   toast.warn(`${contact.name}  is already in contacts.`, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    
     const action = addContact(contact);
      dispatch(action);
  }
  
    const inDuplicate = ({name, number }) => {
      const result = contacts.find((item) => item.name === name && item.number === number);
        return result;
    }

  return (
    <Form onSubmit={handleSubmit}>
        
         <label htmlFor={nameId}>Name</label>
         <Input
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
         <label htmlFor={numberId}>Number</label>
         <Input
          id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
       />
         
         <Button type="sybmit">Add contact</Button>
     </Form>
  )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func
}
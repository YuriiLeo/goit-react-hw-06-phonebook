import {useState} from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './ContactForm.styled';

export default function ContactForm({onSubmit}) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

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
  
  // const handleChangeName = (evt) => {
  //       const { value } = evt.target;
  //       setName(value)
  // }
  
  // const handleChangeNumber = (evt) => {
  //       const { value } = evt.target;
  //       setNumber(value)
  // }
  
  const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit({ name, number });
        setName("");
        setNumber("");
    }

  return (
    <Form onSubmit={handleSubmit}>
         
         <label htmlFor={nameId}>Name</label>
         <Input
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
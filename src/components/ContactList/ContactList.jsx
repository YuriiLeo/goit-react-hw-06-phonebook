import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactItem from 'components/ContactItem/ContactItem';


export default function ContactList({ items, removeContact }) {
  return (
    <List>
      {
        items.map(({ name, number, id }) => (
          <ContactItem key={id} id={id} name={name} number={number} removeContact={removeContact} />
        ))}
    </List>
  );
};


ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  })),
    removeContact: PropTypes.func,
}

import { Container } from "./App.styled";
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";
import Contacts from "components/Contacts/Contacts"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from 'redux/selectors';
import { toast } from 'react-toastify'
import { deleteContacts } from "redux/contactsSlice";
import { setFilter } from "redux/filterSlice";


export default function App() {
    
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();   

  const removeContact = (id) => {
    const action = deleteContacts(id);
    dispatch(action);
         if (contactsFilter.length === 1) {
             dispatch(setFilter(""));
        toast.info('No more contacts matching the filter.', {
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
    }  
    
    const handleChange = (evt) => {
       const { value } = evt.target;
      dispatch(setFilter(value));
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

    const contactsFilter = getFilterContacts();

  return (
      <Container>
          <Section title="Phonebook">
            <ContactForm  />
          </Section>
          <ToastContainer position="top-left" autoClose={3000} />
      <Contacts>
              {contacts.length ?
                  <Section title="Contacts">
                      <Filter onChange={handleChange} />
                      <ContactList items={contactsFilter} removeContact={removeContact} />
                  </Section> :
                  <Notification message="There is no contacts"></Notification>
              }
      </Contacts>
      </Container>
  )
}
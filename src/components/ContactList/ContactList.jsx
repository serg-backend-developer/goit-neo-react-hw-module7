import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { nameFilter } from '../../redux/filtersSlice';
import Contact from '../../components/Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(nameFilter);
  const displayContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {displayContacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
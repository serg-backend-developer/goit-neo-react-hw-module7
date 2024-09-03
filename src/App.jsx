import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from './redux/contactsOps.js';
import { selectLoading } from './redux/contactsSlice.js';

import ContactList from './components/ContactList/ContactList.jsx';
import ContactsForm from './components/ContactsForm/ContactsForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';


const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      {loading && <b>Loading...</b>}
      <ContactList />
      <ToastContainer />
    </div>
  );
};

export default App;
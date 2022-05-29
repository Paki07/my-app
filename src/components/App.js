import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);


  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, {id: uuid(), ...contacts}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })

    setContacts(newContactList);
  }

  useEffect(() => {
    const retriveContacts =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContacts) setContacts(retriveContacts)
  }, [contacts])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis rem sit 
        debitis blanditiis perferendis impedit quia consequuntur sunt aut quisquam enim, minus iure accusantium aperiam,
         iste, animi perspiciatis porro architecto.</p>
    </div>
  )
};

export default App;

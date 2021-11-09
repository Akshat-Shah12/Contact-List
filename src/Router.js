import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { uuid } from "uuidv4";
import App from "./App";
// import NotFound from "./NotFound";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactCard from "./components/ContactCard";

export default function Router() {
  const [contacts, setcontacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";
  // const contacts=[
  //   {
  //     id:"1",
  //     name:"Akshat Shah",
  //     email:"adknd@gmail.com",
  //   },
  //   {
  //     id:"2",
  //     name:"Kknd Shah",
  //     email:"dd@gmail.com",
  //   }
  // ];
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setcontacts(retriveContacts);
  }, []);
  const addContactHandler = (contact) => {
    console.log(contact);
    setcontacts([...contacts, { id: uuid(), ...contact }]);
  };
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    return () => {
      // cleanup
    };
  }, [contacts]);
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setcontacts(newContactList);
  };
  return (
    <BrowserRouter>
      <Routes>
          
        <Route exact path="/" component={<AddContact addContactHandler={addContactHandler} />}>
        </Route>
        <Route exact path="/add" component={()=><ContactList
            contacts={contacts}
            getContactId={removeContactHandler}
          />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// eport;

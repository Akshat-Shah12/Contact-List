import "tailwindcss/tailwind.css";
import "./App.css";
<<<<<<< HEAD
import { uuid } from "uuidv4";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";
=======
import React, { useState } from "react";
>>>>>>> parent of c5fb7bd (Deletion possible from the list)
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactCard from "./components/ContactCard";
import Router from "./Router";
function App() {
<<<<<<< HEAD
  // const [contacts, setcontacts] = useState([]);
  // const LOCAL_STORAGE_KEY = "contacts";
  // // const contacts=[
  // //   {
  // //     id:"1",
  // //     name:"Akshat Shah",
  // //     email:"adknd@gmail.com",
  // //   },
  // //   {
  // //     id:"2",
  // //     name:"Kknd Shah",
  // //     email:"dd@gmail.com",
  // //   }
  // // ];
  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setcontacts(retriveContacts);
  // }, []);
  // const addContactHandler = (contact) => {
  //   console.log(contact);
  //   setcontacts([...contacts, { id: uuid(), ...contact }]);
  // };
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  //   return () => {
  //     // cleanup
  //   };
  // }, [contacts]);
  // const removeContactHandler = (id) => {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });
  //   setcontacts(newContactList);
  // };
  return (
    <>
      <Header/>
      <Router />
    </>
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Header />
    //       <br />
    //       <Route path="/add">
    //         <AddContact addContactHandler={addContactHandler} />
    //       </Route>
    //       {/* <AddContact addContactHandler={addContactHandler} /> */}
    //       {/* <br /> */}
    //       <Route path="/b">
    //         <ContactList
    //           contacts={contacts}
    //           getContactId={removeContactHandler}
    //         />
    //       </Route>
    //     </Routes>

    //     {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    //     {/* <ContactCard /> */}
    //   </BrowserRouter>
    // </div>
=======
  const [contacts, setcontacts] = useState([]);
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
  const addContactHandler = (contact) => {
    console.log(contact);
    setcontacts([...contacts, contact]);
  };
  return (
    <>
      <Header />
      <br />
      <AddContact addContactHandler={addContactHandler} />
      <br />
      <ContactList contacts={contacts} />
      <ContactCard />
    </>
>>>>>>> parent of c5fb7bd (Deletion possible from the list)
  );
}

export default App;

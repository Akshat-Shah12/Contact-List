import "tailwindcss/tailwind.css";
import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactCard from "./components/ContactCard";

function App() {
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
  );
}

export default App;

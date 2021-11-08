import React from "react";
import "tailwindcss/tailwind.css";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler=(id)=>{
      props.getContactId(id);
  };
  console.log(props);
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>;
  });
  return <div>{renderContactList}</div>;
};
export default ContactList;

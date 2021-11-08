import React from "react";
import "tailwindcss/tailwind.css";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard key={contact.id} contact={contact}></ContactCard>;
  });
  return <div>{renderContactList}</div>;
};
export default ContactList;

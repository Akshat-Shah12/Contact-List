import "tailwindcss/tailwind.css";
import React from "react";
const ContactCard = (props) => {
  const { id, name, email } = props.contact || {};
  // console.log(name+" "+id+" "+ email);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">{name}</div>
        <p className="text-gray-500">{email}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={()=>props.clickHandler(id)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
        />
      </svg>
    </div>
  );
};
export default ContactCard;

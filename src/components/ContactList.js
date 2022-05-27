import React from "react";
import ContactCard from "./ContactCard"

const ContactList = (props) => {

    const renderContactList = props.contacts.map((contact) => {
        return (
         <ContactCard contact={contact}></ContactCard>
        )
    })
  return <div className="ui celled list">
      {renderContactList}
      <p>Hello this is new changes in Contact branch</p>
  </div>;
};

export default ContactList;

import React, { useState }  from "react"; 
import ContactRow from "./ContactRow";
import { useEffect } from "react";


const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];
  useEffect(()=>{
        async function fetchContacts() {
          try {
            const apiData = await fetch ("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/usersLinks to an external site.") 
            const contactsData = await apiData.json();
          } catch (error) {
            console.error(error);
          }
        }
        fetchContacts()
      }, []);


export default function ContactList() { 
   // const [contacts, setContacts] = useState(dummyContacts)
    const [ contacts, setContacts] = useState(dummyContacts)
    //console.log("Contacts: ", contacts)
    console.log("Contacts: ", contacts)

  return ( 
    
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
                  contacts.map ((contact) => {
                    return <ContactRow key={contact.id} contact={contact} />;
                  })
             }
          </tbody>
        </table>)
   
}
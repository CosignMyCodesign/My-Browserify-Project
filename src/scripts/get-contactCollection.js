import renderContact from "./contactList.js"
// File to GET data from database
const getMyContact = () => {
  fetch("http://localhost:8088/contacts/")
    .then(contact => contact.json())
      .then(parsedContacts => {
        parsedContacts.forEach(myContact => {
          const contactComponent = makeContactComponent(myContact.name, myContact.address, myContact.phone)
          renderContact(contactComponent)
        })
      })
}
getMyContact()

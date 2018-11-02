
// File to GET data from database
const getMyContact = () => { 
  return fetch("http://localhost:8088/contacts/")
    .then(contact => contact.json())
      .then(parsedContacts => {
        return parsedContacts
        })
}
export default getMyContact 

// Separation of power

// parsedContacts.forEach(myContact => {
//   const contactComponent = makeContactComponent(myContact.name, myContact.address, myContact.phone)
// renderContact(contactComponent)

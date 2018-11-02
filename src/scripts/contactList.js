import getMyContact from "./contactCollection.js"
import makeContactComponent from "./contact.js"

// Dom Injection

const renderContact = () => {
  getMyContact()
    .then(contact => {
      contact.forEach(myContact => {
        let contactComp = makeContactComponent(myContact.name, myContact.address, myContact.number)
        let contactArea = document.querySelector(".contactList")
        contactArea.appendChild(contactComp)
      })
    })
}

export default renderContact 
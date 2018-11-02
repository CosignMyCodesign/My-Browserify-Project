import makeContactComponent from "./contact.js"

// Dom Injection
const renderContact = (contact) => {
  let contactArea = document.querySelector(".contactList")
  contactArea.appendChild(contact)
}

export default renderContact 
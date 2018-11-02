// HTML Component
const makeContactComponent = (name, address, phone) => { 
  let contactSection = document.createElement("section")
  contactSection.classList.add("contactItem")
  contactSection.innerHTML=`
    <div class="contacts">
        ${h3(name)}
        ${h6(address)}
        ${h6(phone)}
    </div>`
    return contactSection
}

export default makeContactComponent

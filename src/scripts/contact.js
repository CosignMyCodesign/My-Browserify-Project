// HTML Component
const makeContactComponent = (name, address, number) => {
  let contactSection = document.createElement("section")
  contactSection.classList.add("contactItem")
  contactSection.innerHTML=`
    <div class="contacts">
        <h3>${name}</h3>
        <h6>${address.street}, ${address.city}, ${address.state}</h6>
        <h6>${number}</h6>
    </div>`
    return contactSection
}

export default makeContactComponent

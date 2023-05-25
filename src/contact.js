function createContact() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  container.appendChild(contactContainer);

  const telephoneTitle = document.createElement('h2');
  telephoneTitle.innerText = 'Telephone Number';
  contactContainer.appendChild(telephoneTitle);

  const telephone = document.createElement('div');
  contactContainer.appendChild(telephone);
  telephone.innerText = '345 876 3542';

  const emailTitle = document.createElement('h2');
  contactContainer.appendChild(emailTitle);
  emailTitle.innerText = 'Email';

  const email = document.createElement('div');
  contactContainer.appendChild(email);
  email.innerText = 'pizzeriacornicione@gmail.com';

  const addressTitle = document.createElement('h2');
  addressTitle.innerText = 'Address';
  contactContainer.appendChild(addressTitle);

  const address = document.createElement('div');
  address.innerText = 'Via Partenope, 13, 80132 Napoli NA';
  contactContainer.appendChild(address);

  const hoursTitle = document.createElement('h2');
  hoursTitle.innerText = 'Hours';
  contactContainer.appendChild(hoursTitle);

  const mondToFri = document.createElement('div');
  mondToFri.innerText = 'Monday to Friday : 08:30 - 22:00';
  contactContainer.appendChild(mondToFri);

  const satAndSund = document.createElement('div');
  satAndSund.innerText = 'Saturday and Sunday : 09:00 - 23:00';
  contactContainer.appendChild(satAndSund);
}

export { createContact };

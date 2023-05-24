const content = document.getElementById('content');

const topBar = document.createElement('div');
topBar.classList.add('top-bar');
content.appendChild(topBar);

const restaurantName = document.createElement('div');
restaurantName.classList.add('restaurant-name');
topBar.appendChild(restaurantName);
restaurantName.innerText = 'Pizzeria Cornicione';

const tabContainer = document.createElement('div');
tabContainer.classList.add('tab-container');
topBar.appendChild(tabContainer);

const homeTab = document.createElement('div');
homeTab.classList.add('tab', 'tab-home');
tabContainer.appendChild(homeTab);
homeTab.innerText = 'Home';

const menuTab = document.createElement('div');
menuTab.classList.add('tab', 'tab-menu');
tabContainer.appendChild(menuTab);
menuTab.innerText = 'Menu';

const contactTab = document.createElement('div');
contactTab.classList.add('tab', 'tab-contact');
tabContainer.appendChild(contactTab);
contactTab.innerText = 'Contact';
contactTab.style.borderBottom = '0.2rem solid white';

const contactContainer = document.createElement('div');
contactContainer.classList.add('contact-container');
content.appendChild(contactContainer);

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
hoursTitle.innerText = "Hours";
contactContainer.appendChild(hoursTitle);

const mondToFri = document.createElement('div');
mondToFri.innerText = 'Monday to Friday : 08:30 - 22:00';
contactContainer.appendChild(mondToFri);

const satAndSund = document.createElement('div');
satAndSund.innerText = 'Saturday and Sunday : 09:00 - 23:00';
contactContainer.appendChild(satAndSund);

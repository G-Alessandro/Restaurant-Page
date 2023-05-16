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
homeTab.classList.add('tab-home');
tabContainer.appendChild(homeTab);
homeTab.innerText = 'Home';

const menuTab = document.createElement('div');
menuTab.classList.add('tab-menu');
tabContainer.appendChild(menuTab);
menuTab.innerText = 'Menu';

const contactTab = document.createElement('div');
contactTab.classList.add('tab-contact');
tabContainer.appendChild(contactTab);
contactTab.innerText = 'Contact';

const aboutUsContainer = document.createElement('div');
aboutUsContainer.classList.add('about-us-container');
content.appendChild(aboutUsContainer);

const aboutUs = document.createElement('div');
aboutUs.classList.add('about-us');
aboutUsContainer.appendChild(aboutUs);

const aboutUsTitle = document.createElement('h1');
aboutUsTitle.classList.add('about-us-title');
aboutUs.appendChild(aboutUsTitle);
aboutUsTitle.innerText = 'About Us';

const aboutUsDescription = document.createElement('p');
aboutUsDescription.classList.add('about-us-description');
aboutUs.appendChild(aboutUsDescription);
aboutUsDescription.innerText = 'Located in the heart of the city, we are committed to bringing you the authentic taste of Italy. Our dough is prepared by hand every day, following traditional Italian recipes. For us, the pizzeria is not just a matter of food. It is a place of meeting, conviviality and joy. We are proud to serve our community and to be a part of the Italian culinary tradition. The passion for pizza is reflected in every creation that comes out of our oven, and we can\'t wait for you to try our authentic gastronomic experience.';

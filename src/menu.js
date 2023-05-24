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
menuTab.style.borderBottom = '0.2rem solid white';

const contactTab = document.createElement('div');
contactTab.classList.add('tab', 'tab-contact');
tabContainer.appendChild(contactTab);
contactTab.innerText = 'Contact';

const pizzaMenuContainer = document.createElement('div');
pizzaMenuContainer.classList.add('pizza-menu-container');
content.appendChild(pizzaMenuContainer);

const pizzaMenuArray = [
  {
    pizza: 'margherita',
    title: 'Margherita',
    ingredient1: 'Tomato',
    ingredient2: 'Fiordilatte',
    ingredient3: 'Basil',
    ingredient4: 'Oil',
    price: '3,00',
  },
  {
    pizza: 'marinara',
    title: 'Marinara',
    ingredient1: 'Tomato',
    ingredient2: 'Garlic',
    ingredient3: 'Oregano',
    ingredient4: 'Oil',
    price: '2,50',
  },
  {
    pizza: 'capricciosa',
    title: 'Capricciosa',
    ingredient1: 'Tomato',
    ingredient2: 'Mozzarella',
    ingredient3: 'Mushrooms',
    ingredient4: 'Artichokes',
    ingredient5: 'Ham',
    ingredient6: 'Black olives',
    price: '4,00',
  },
  {
    pizza: 'diavola',
    title: 'Diavola',
    ingredient1: 'Tomato',
    ingredient2: 'Mozzarella',
    ingredient3: 'Spicy salami',
    ingredient4: 'Chilli pepper',
    ingredient5: 'Black olives',
    price: '3,50',
  },
  {
    pizza: 'ortolana',
    title: 'Ortolana',
    ingredient1: 'Tomato',
    ingredient2: 'Mozzarella',
    ingredient3: 'Peppers',
    ingredient4: 'Aubergines',
    ingredient5: 'Courgettes',
    ingredient6: 'Various vegetables',
    price: '3,00',
  },
  {
    pizza: 'quattro-formaggi',
    title: 'Quattro Formaggi',
    ingredient1: 'Mozzarella',
    ingredient2: 'Gorgonzola',
    ingredient3: 'Fontina',
    ingredient4: 'Parmesan',
    ingredient5: 'Basil',
    price: '4,00',
  },
];

function createMenu() {
  const arrayLength = pizzaMenuArray.length;
  for (let i = 0; i < arrayLength; i += 1) {
    const pizzaClass = pizzaMenuArray[i].pizza;

    const pizza = document.createElement('div');
    pizza.classList.add('pizza', `pizza-${pizzaClass}`);
    pizzaMenuContainer.appendChild(pizza);

    const pizzaTitle = document.createElement('h2');
    pizza.appendChild(pizzaTitle);
    pizzaTitle.innerText = pizzaMenuArray[i].title;

    const pizzaImg = document.createElement('div');
    pizzaImg.classList.add('pizza-img', `pizza-${pizzaClass}-img`);
    pizza.appendChild(pizzaImg);

    const pizzaIngr = document.createElement('div');
    pizzaIngr.classList.add('pizza-ingr', `pizza-${pizzaClass}-ingr`);
    pizza.appendChild(pizzaIngr);

    const ingredients = document.createElement('ul');
    pizzaIngr.appendChild(ingredients);

    const pizzaObjectLength = Object.keys(pizzaMenuArray[i]).length - 2;
    for (let e = 1; e < pizzaObjectLength; e += 1) {
      const ingrLi = document.createElement('li');
      ingredients.appendChild(ingrLi);
      ingrLi.innerText = pizzaMenuArray[i][`ingredient${e}`];
    }

    const price = document.createElement('div');
    price.classList.add('price');
    pizza.appendChild(price);
    price.innerText = `Price: € ${pizzaMenuArray[i].price}`;
  }
}

createMenu();

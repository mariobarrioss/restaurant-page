import Dish1 from './assets/images/dish-1.jpg';
import Dish2 from './assets/images/dish-2.jpg';
import Dish3 from './assets/images/dish-3.jpg';
import Dish4 from './assets/images/dish-4.jpg';

function dishFactory(name, description, price) {
  return { name, description, price };
}

function createDishes() {
  const dishes = [];
  dishes.push(dishFactory('Soupe a l\'oignon', 'This is a traditional French soup made of onions and beef stock, usually served with croutons and melted cheese on top.', 20));
  dishes.push(dishFactory('Coq au vin', 'Chicken braised with wine, mushrooms, salty pork or bacon (lardons), mushrooms, onions, and garlic.', 30));
  dishes.push(dishFactory('Cassoulet', 'White beans stewed slowly with meat. The dish typically uses pork or duck but can include sausages, goose, or mutton.', 40));
  dishes.push(dishFactory('Boeuf bourguignon', 'Stew made from beef braised in red wine, beef broth, and seasoned vegetables including pearl onions and mushrooms.', 35));
  return dishes;
}

function collectImages() {
  const images = [];
  const dish1 = new Image();
  const dish2 = new Image();
  const dish3 = new Image();
  const dish4 = new Image();
  dish1.src = Dish1;
  dish2.src = Dish2;
  dish3.src = Dish3;
  dish4.src = Dish4;
  images.push(dish1, dish2, dish3, dish4);
  return images;
}

function setImages() {
  const images = collectImages();
  images.forEach(image => {
    const index = images.indexOf(image);
    const placeholder = document.querySelector(`#dish-${index}`);
    placeholder.appendChild(image);
  });
}

export default function () {
  const pageContent = document.querySelector('.page-content');
  pageContent.innerHTML = '';
  const div = document.createElement('div');
  div.className = 'columns is-multiline is-centered';
  const dishes = createDishes();
  dishes.forEach(dish => {
    const index = dishes.indexOf(dish);
    const { name, description, price } = dish;
    const dishCard = `
      <div class="column is-full-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        <div class="card">
          <div class="card-image">
            <figure id="dish-${index}" class="image is-4by3">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">${name}</p>
              </div>
            </div>

            <div class="content">
              ${description}
              <br>
             <strong>$${price}</strong> 
            </div>
          </div>
        </div>
      </div>`;
    div.insertAdjacentHTML('beforeend', dishCard);
  });
  pageContent.appendChild(div);
  setImages();
}

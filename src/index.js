import 'normalize.css';
import 'index.css';
import $ from 'jquery'; 
import api from './api';
import store from './store';
import shoppingList from './shopping-list';

function main() {
  console.log('DOM is loaded');

  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
}

$(main);
// $(document).ready(function() {
//   shoppingList.bindEventListeners();

//   // On initial load, fetch Shopping Items and render
//   api.getItems()
//     .then((items) => {
//       items.forEach((item) => store.addItem(item));
//       shoppingList.render();
//     })
//     .catch(err => console.log(err.message));
// });


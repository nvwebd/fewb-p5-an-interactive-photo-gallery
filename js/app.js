window.addEventListener('load', () => {
  baguetteBox.run('.gallery');
});

const searchBoxHandler = (event) => {
  console.log('event.target.value: ', event.target.value);
}

const app = () => {
  const searchBox = document.querySelector('#search-box');
  searchBox.addEventListener('input', searchBoxHandler);
}

app();
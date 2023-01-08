window.addEventListener('load', () => {
  baguetteBox.run('.gallery');
});

const handleSearch = (event, nodeList) => {
  const searchValue = event.target.value;
  
  nodeList.forEach(node => {
    let nodeDataCaption = node.getAttribute('data-caption').toLowerCase();
    
    if (nodeDataCaption.includes(searchValue)) {
      node.style.display = "";
    } else {
      node.style.display = 'none';
    }
  });
};

const app = () => {
  const links = document.querySelectorAll('a');
  const searchBox = document.querySelector('#search');
  
  searchBox.addEventListener('input', (event) => {
    console.log('change triggered: ', event.target.value)
    handleSearch(event, links);
  });
};

app();


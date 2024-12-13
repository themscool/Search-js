let dataItem = document.getElementById('data-item');
let search = document.getElementById('search');
let noDataMessage = document.getElementById('no-data-message');
let fruits = ['banana', 'mango', 'orange', 'tomato', 'plum', 'jackfruit'];

let fruitList = fruits.map(ele => `<li>${ele}</li>`).join('');

dataItem.innerHTML = fruitList;


search.addEventListener('input', function () {
    let searchTerm = search.value.toLowerCase();
    updateList(searchTerm);
});

function updateList(searchTerm) {
    // Clear the existing list and hide the no data message
    dataItem.innerHTML = '';
    noDataMessage.style.display = 'none';

    // Filter fruits based on search term
    let filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(searchTerm));

    if (filteredFruits.length === 0) {
        // Show the no data message if no matching data is found
        noDataMessage.style.display = 'block';
    } else {
        // Create list items and append to the ul
        filteredFruits.forEach(fruit => {
            let listItem = document.createElement('li');
            listItem.innerHTML = highlightSearchTerm(fruit, searchTerm);
            dataItem.appendChild(listItem);
        });
    }
}

function highlightSearchTerm(text, searchTerm) {
    // Case insensitive highlighting of the search term in the text
    let regex = new RegExp(searchTerm, 'ig');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
}
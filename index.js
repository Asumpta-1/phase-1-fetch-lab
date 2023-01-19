function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.error('Error:', error));
}

// function renderBooks(data) {
//   const booksContainer = document.getElementById('books');
//   data.forEach(book => {
//     const bookTitle = document.createElement('h3');
//     bookTitle.innerText = book.name;
//     booksContainer.appendChild(bookTitle);
//   });
// }

let myJSON = { "name": "John", "age": 30 };

function myFunction() {
  console.log(myJSON);
}

myFunction();
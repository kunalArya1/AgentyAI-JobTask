document.addEventListener('DOMContentLoaded', () => {
  const bookList = document.getElementById('book-list');
  const loader = document.getElementById('loader');

  loader.style.display = 'block';

  fetch('https://simple-books-api.glitch.me/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      return response.json();
    })
    .then(books => {
      loader.style.display = 'none';
      books.forEach(book => {
        // const li = document.createElement('li');
        // li.textContent = `${book.name} - ${book.type}`;

        // console.log(book)
        // // const li = `<li>${book.name}</li>`
        // bookList.append(li);


        // bookList.innerHTML += `
        //     <li>
        //       <span>Title: ${book.name}</span>
        //       <span>Author: ${book.type}</span>
        //       <span>Year: ${book.year}</span>
        //     </li>`;

        // bookList.appendChild(bookList);

        const li = document.createElement('li');
        li.innerHTML = `
          <span>${book.name}</span>
          <span>${book.type}</span>
         `;
        bookList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error fetching books:', error.message);
      loader.style.display = 'none';
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to fetch books. Please try again later.';
      bookList.appendChild(errorMessage);
    });
});
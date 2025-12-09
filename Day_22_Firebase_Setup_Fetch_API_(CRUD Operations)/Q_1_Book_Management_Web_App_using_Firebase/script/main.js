import { addBook, fetchBooks, updateAuthor, deleteBook } from '../script/crud.js';

const form = document.getElementById('bookForm');
const grid = document.getElementById('booksGrid');
const addBtn = document.getElementById('addBtn');

// Render books 
 function renderBooks(data) {
  grid.innerHTML = '';
  if (!data) return;
  Object.entries(data).forEach(([id, book]) => {
    const card = document.createElement('div');
    card.className = "card";
    card.style.border = '1px solid #ccc';
    card.style.padding = '10px';
    card.style.margin = '10px';
    card.style.width = '250px';
    card.innerHTML = `
      <img src="${book.image}" width="80%" />
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Price: $${book.price}</p>
      <button class="update" data-id="${id}">Update Author</button>
      <button class="delete" data-id="${id}">Delete</button>
    `;
    grid.appendChild(card);
  });
}

// Initial load
async function loadBooks() {
  const data = await fetchBooks();
  renderBooks(data);
}

loadBooks();

// Add Book
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
    price: price.value,
    image: image.value
  };

  await addBook(newBook);
  loadBooks();
  form.reset();
});

// Insert Dummy Books
addBtn.addEventListener('click', async () => {
  const dummy = [
    { title: 'Book A', author: 'Author A', price: 100, image: 'https://plus.unsplash.com/premium_vector-1741781606054-d8791c33d915?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0' },
    { title: 'Book B', author: 'Author B', price: 150, image: 'https://plus.unsplash.com/premium_vector-1741781606054-d8791c33d915?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0' },
    { title: 'Book C', author: 'Author C', price: 200, image: 'https://plus.unsplash.com/premium_vector-1741781606054-d8791c33d915?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0' },
    { title: 'Book D', author: 'Author D', price: 250, image: 'https://plus.unsplash.com/premium_vector-1741781606054-d8791c33d915?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0' },
    { title: 'Book E', author: 'Author E', price: 300, image: 'https://plus.unsplash.com/premium_vector-1741781606054-d8791c33d915?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0' },
    { title: 'Book F', author: 'Author F', price: 350, image: 'https://plus.unsplash.com/premium_vector-1741781606054-d8791c33d915?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0' }
  ];

  for (let b of dummy) await addBook(b);
  loadBooks();
});

// Update & Delete actions
grid.addEventListener('click', async (e) => {
  const id = e.target.dataset.id;

  if (e.target.classList.contains('update')) {
    const newAuthor = prompt('Enter new author:');
    if (newAuthor) {
      await updateAuthor(id, newAuthor);
      loadBooks();
    }
  }

  if (e.target.classList.contains('delete')) {
    await deleteBook(id);
    loadBooks();
  }
});

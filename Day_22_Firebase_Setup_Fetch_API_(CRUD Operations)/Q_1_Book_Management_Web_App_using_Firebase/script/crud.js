const BASE_URL = "https://book-management-82363-default-rtdb.asia-southeast1.firebasedatabase.app/books";


// CREATE
export async function addBook(book) {
const res = await fetch(`${BASE_URL}.json`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(book),
});
return res.json();
}


// READ
export async function fetchBooks() {
const res = await fetch(`${BASE_URL}.json`);
return res.json();
}


// UPDATE
export async function updateAuthor(id, newAuthor) {
return fetch(`${BASE_URL}/${id}.json`, {
method: "PATCH",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ author: newAuthor }),
});
}


// DELETE
export async function deleteBook(id) {
return fetch(`${BASE_URL}/${id}.json`, { method: "DELETE" });
}
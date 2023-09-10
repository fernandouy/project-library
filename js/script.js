const bookForm = document.querySelector("#book-form");
const containerDiv = document.querySelector("#container");

const myLibrary = [];

class Book {
  constructor(title, author, pages, isReaded) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isReaded = isReaded;
  }
  showInfo() {
    return `${this.title} by ${this.author}, ${this.pages}, ${
      this.isReaded ? "readed" : "not read yet"
    }`;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const [title, author, pages, isReaded] = event.target;

  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    pages.value <= 0
  )
    return;

  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    isReaded.checked
  );

  addBookToLibrary(newBook);
  renderLibrary();
});

function renderLibrary() {
  containerDiv.innerHTML = "";

  myLibrary.forEach((book, index) => {
    containerDiv.innerHTML += `
      <div class="bg-slate-600 rounded-lg p-4 text-white break-words">
        <h2 class="text-2xl font-bold text-center ">${book.title}</h2>
        <hr>
        <p class="text-lg mt-4"><span class="font-bold text-normal">Description:</span> ${book.showInfo()}</p>
        <button onclick="removeBook(${index})" class="bg-red-500 rounded-full w-full mt-4 shadow-md px-4 py-2">Delete book</button>
      </div>
    `;
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  renderLibrary();
}

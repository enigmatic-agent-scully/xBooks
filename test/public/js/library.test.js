$(document).ready(() => {
  var table = $('.bookTable');
  var books = [];

  var getBooks = () => {
    $.get('/api/books', data => {
      books = data;
      initRows();
    });
  };

  getBooks();

  var initRows = () => {
    table.empty();
    var rowsToAdd = [];

    for (var i = 0; i < books.length; i++) {
      rowsToAdd.push(newRow(books[i]));
    }
    table.prepend(rowsToAdd);
  };

  var newRow = book => {
    var newBookRow = $(
      `<tr><td><img src='${book.coverimg}'></td><td>${book.title}</td><td>${
        book.author
      }</td><td>${book.genres}</td><td>${book.isbn}</td>`
    );
    return newBookRow;
  };
});

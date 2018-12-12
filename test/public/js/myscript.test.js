$(document).ready(function() {
  //comment to push
  let results;
  let url = '';
  let img = '';
  let title = '';
  let authors = '';
  let addButton = '';
  let wishButton = '';

  $('#bookSearch').on('click', function() {
    const search = $('#books').val();
    $('#result').empty();

    if (search === '') {
      alert('please enter a book title');
    } else {
      //API call
      $.get('https://www.googleapis.com/books/v1/volumes?q=' + search).then(
        function(response) {
          console.log(response.items);

          results = response.items;

          for (var i = 0; i < results.length; i++) {
            title = $(
              '<h5 class="title">' + results[i].volumeInfo.title + '</h5>'
            );

            authors = $(
              '<h5 class="authors">' + results[i].volumeInfo.authors + '</h5>'
            );

            img = $('<img class="imgStyles"><br>');

            addButton = $(
              `<a class='pure-button pure-button-primary bookAdd'>`
            );

            wishButton = $(
              `<a class='pure-button pure-button-primary wishAdd'>`
            );

            addButton.text('Add');
            wishButton.text('Wish');

            addButton.attr('book-id', i);
            wishButton.attr('book-id', i);
            url = results[i].volumeInfo.imageLinks.thumbnail;

            img.attr('src', url); //attach image url

            const newBook = $("<div class='newDiv'>");
            const divInside = $("<div class='innerDiv'>");

            img.appendTo(divInside);

            title.appendTo(divInside);

            authors.appendTo(divInside);

            addButton.appendTo(divInside);

            wishButton.appendTo(divInside);

            divInside.appendTo(newBook);

            newBook.appendTo('#result');
          }
        }
      );
    }
  });

  $(document).on('click', '.bookAdd', function(e) {
    e.preventDefault();
    var bookObj = {};
    var id = $(this).attr('book-id');
    if ((results[id].volumeInfo.authors.length = 1)) {
      var author = results[id].volumeInfo.authors[0];
      bookObj = {
        title: results[id].volumeInfo.title,
        author: author,
        genres: results[id].volumeInfo.categories[0],
        isbn: results[id].volumeInfo.industryIdentifiers[0].identifier,
        coverimg: results[id].volumeInfo.imageLinks.thumbnail,
        pubdate: results[id].volumeInfo.publishedDate
      };
    } else {
      var authorsArr = [];

      for (var i = 0; i < results[id].volumeInfo.authors.length; i++) {
        authors.push(results[id].volumeInfo.authors[i]);
      }

      var authors = authorsArr.join();

      bookObj = {
        title: results[id].volumeInfo.title,
        author: authors,
        genres: results[id].volumeInfo.categories.join(),
        isbn: results[id].volumeInfo.industryIdentifiers[0].identifier,
        coverimg: results[id].volumeInfo.imageLinks.thumbnail,
        pubdate: results[id].volumeInfo.publishedDate
      };
    }
    console.log(bookObj);
    $.ajax({
      url: '/api/books',
      type: 'POST',
      data: bookObj,
      dataType: 'json',
      success: () => {
        console.log('added new book!');
      }
    });
  });
});

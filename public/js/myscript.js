$(document).ready(function() {
  //comment to push
  let results;
  let url = '';
  let img = '';
  let title = '';
  let authors = '';
  let buttons = '';

  $('#bookSearch').on('click', function() {
    const search = $('#books').val();

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

            // buttons = $(
            //   '<a class="pure-button pure-button-primary bookAdd" book-id=' +
            //     [i] +
            //     '>Add</a>'
            // );
            buttons = $(`<a class='pure-button pure-button-primary bookAdd'>`);

            buttons.text('Add');

            buttons.attr('book-id', i);

            url = results[i].volumeInfo.imageLinks.thumbnail;

            img.attr('src', url); //attach image url

            const newBook = $("<div class='newDiv'>");
            const divInside = $("<div class='innerDiv'>");

            img.appendTo(divInside);

            title.appendTo(divInside);

            authors.appendTo(divInside);

            buttons.appendTo(divInside);

            divInside.appendTo(newBook);

            newBook.appendTo('#result');
          }
        }
      );
    }
  });

  $(document).on('click', '.bookAdd', function(e) {
    e.preventDefault();
    var id = $(this).attr('book-id');
    console.log(id);
    var bookObj;
    for (var i = 0; i < results.length; i++) {
      if (id === [i]) {
        bookObj = {
          title: results[i].volumeInfo.title,
          authors: results[i].volumeInfo.authors,
          genres: results[i].volumeInfo.categories,
          isbn: results[i].volumeInfo.industryIdentifiers[0].identifier,
          coverimg: results[i].volumeInfo.imageLinks.thumbnail,
          pubdate: results[i].volumeInfo.publishedDate
        };
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
      }
    }
  });

  // return false;
});

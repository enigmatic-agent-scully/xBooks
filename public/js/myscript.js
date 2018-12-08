$(document).ready(function() {
  //comment to push
  $('#bookSearch').on('click', function() {
    const search = $('#books').val();

    if (search === '') {
      alert('please enter a book title');
    } else {
      let url = '';
      let img = '';
      let title = '';
      let authors = '';
      let buttons = '';
      //API call
      $.get('https://www.googleapis.com/books/v1/volumes?q=' + search).then(
        function(response) {
          console.log(response.items);

          const results = response.items;

          for (i = 0; i < results.length; i++) {
            title = $(
              '<h5 class="title">' + results[i].volumeInfo.title + '</h5>'
            );

            authors = $(
              '<h5 class="authors">' + results[i].volumeInfo.authors + '</h5>'
            );

            img = $('<img class="imgStyles"><br>');

            buttons = $(
              '<button class="pure-button pure-button-primary" id=' +
                results[i].volumeInfo.id +
                '>Add</button>'
            );

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

  return false;
});

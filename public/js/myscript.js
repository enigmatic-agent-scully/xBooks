$(document).ready(function() {
  $('#bookSearch').on('click', function() {
    const search = $('#books').val();

    if (search === '') {
      alert('please enter a book title');
    } else {
      const url = '';
      const img = '';
      const title = '';
      const authors = '';

      $.get('https://www.googleapis.com/books/v1/volumes?q=' + search, function(
        response
      ) {
        console.log(response);

        for (i = 0; i < response.items.length; i++);

        title = $(`<h5>${response.items[i].volumeInfo.title}</h5>`);

        authors = $(`<h5>${response.items[i].volumeInfo.authors}</h5>`);

        img = $(
          `<img><br><a href='${
            response.items[i].volumeInfo.infoLink
          }'><button class="pure-button pure-button-primary">Read more</button> </a>`
        );

        url = response.items[i].volumeInfo.imageLinks.thumbnail;

        img.attr('src', url); //attach image url

        title.appendTo('#result');

        authors.appendTo('#result');

        img.appendTo('#result');
      });
    }
  });

  return false;
});

$(document).ready(function(){

    $('#bookSearch').on('click', function(){

        const search = $('#books').val();
        
        if (search === '') {
            alert('please enter a book title')
        }

        else {
        

            let url = '';
            let img = '';
            let title = '';
            let authors = '';

            $.get('https://www.googleapis.com/books/v1/volumes?q=' + search).then(function(response){

                console.log(response.items);

                const results = response.items;

                console.log(results[0]);

                for (i = 0; i < results.length ; i++){

                title = $('<h5 class="title">' + results[i].volumeInfo.title + '</h5>' );

                authors = $('<h5 class="authors">' + results[i].volumeInfo.authors + '</h5>' );

                img = $('<img class="imgStyles"><br><a href=' + results[i].volumeInfo.infoLink + '><button class="pure-button pure-button-primary">Read more</button> </a>' );

                url = results[i].volumeInfo.imageLinks.thumbnail;

                img.attr('src', url); //attach image url

                const newBook = $("<div class='newDiv'>");

                title.appendTo(newBook);

                authors.appendTo(newBook);

                img.appendTo(newBook);

                newBook.appendTo('#result');
                };
            });
        }
    });

    return false;
});

// var images=['../images/bg.jpg','../images/bg2.jpeg','../images/bg2.jpg','../images/bg3.jpeg','../images/bg4.jpeg'];

// setInterval(function(){
//   var url=images[Math.floor(Math.random() * images.length)];
//   document.body.style.backgroundImage = 'url('+url+')';  
// },5000);


var tvArray = ["Black Mirror", "Game of Thrones", "Friends", "The office", "Seinfeld"];

$(document).ready(function() {
    for (var i = 0; i < tvArray.length; i++) {
        $("#tv-buttons").append("<button type='button' onclick='searchGif(\"" + tvArray[i] + "\")' class='btn' value=' " + tvArray[i] + "'> " + tvArray[i] + " </button>");
    }
});

function tvButtonClicked() {
    var userInput = $('#tv-input').val();
    searchGif(userInput);
}

function submitButtonClicked() {
    var userInput = $('#tv-input').val();

    if (userInput) {
        $('#tv-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn' value=' " + userInput + "'> " + userInput + " </button>");
    }
}

function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=dc6zaTOxFJmzC',
            type: 'GET',
        })
        .done(function(response) {
            displayGif(response);
        })
}

function displayGif(response) {
    $('#tvshows').empty();
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';

        image = '<div class="col-md-4">' + image + "</div>";
        $('#tvshows').append(image);
    }

    $('.movImage').on('click', function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

    });
}
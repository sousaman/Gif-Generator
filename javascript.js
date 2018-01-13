// Code to ensure page has loaded before code starts running
$(document).ready(function() {

    // Global Variable
    var mascots = ["Cardinals", "Bears", "Packers", "Giants", "Lions", "Redskins",
        "Eagles", "Steelers", "Rams", "49ers", "Browns", "Colts", "Cowboys", "Chiefs",
        "Chargers", "Broncos", "Jets", "Patriots", "Raiders", "Titans", "Bills", "Vikings",
        "Falcons", "Dolphins", "Saints", "Bengals", "Seahawks", "Buccaneers", "Panthers",
        "Jaguars", "Ravens", "Texans"
    ];

    // Functions

    function createButtons() {

        $("#buttons").text("");

        for (var i = 0; i < mascots.length; i++) {


            var mascotsBtn = $("<button>");
            mascotsBtn.attr("class", "mascotButton btn btn-info m-1");
            mascotsBtn.attr("data-letter", mascots[i]);
            mascotsBtn.text(mascots[i]);
            $("#buttons").append(mascotsBtn);

        }
    }


    // Code

    createButtons();


    // On Click Functions
    $("#submit").on("click", function() {
        var currentText = $("#mascot").value;
        if (currentText != '') {
            mascots.push(currentText);
            createButtons();

        }

    });


    $(".mascotButton").on("click", function() {
        var searchString = $(this).attr('data-letter')
        console.log(searchString);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchString +
            "&limit=10&rating=pg&api_key=n6uEsN72MeGZDGAf2aiv2KWbj6NOGv61";
        console.log(queryURL);
        $.get(queryURL).done(function(response) {

            for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i]);
                var newGif = $("<div class='float-left'>");
                newGif.append("<h3>Rating: " + response.data[i].rating + "</h3>");
                newGif.append("<img src='" + response.data[i].images.original_still.url + "' class='img-fluid'></img>");
                newGif.append("<img src='" + response.data[i].images.original.url + "' class='img-fluid d-none'></img>")
                $("#gifs").append(newGif);
            }
        });

    });


    $(".img").on("click", function() {
        


    });




})
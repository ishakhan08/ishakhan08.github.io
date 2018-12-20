
$(document).ready(function () {

    // Questions - Answers
    var questions = [
        {
            question: "Which costume did Emma wear to a beauty pageant on Thanksgiving?",
            answers: ["A cowgirl costume", "A princess costume", "A turkey costume", "A fairy costume"],
            value: 0,
            correctAnswer: "A cowgirl costume",
            image: "assets/images/emma1.png",
        },
        {
            question: "What did Joey buy Chandler as a token of their friendship, which Chandler hated?",
            answers: ["A duck", "A foosball table", "A sweater", "A bracelet"],
            value: 3,
            correctAnswer: "A bracelet",
            image: "assets/images/bracelet.jpeg",
        },
        {
            question: "Who fell in an open grave?",
            answers: ["Chandler", "Phoebe", "Joey", "Ross"],
            value: 3,
            correctAnswer: "Ross",
            image: "assets/images/grave.jpeg",
        },
        {
            question: "What was the name of the self help book that the girls loved?",
            answers: ["Be Your Own Cleansing Pool", "Be Your Own Windkeeper", "Be Your Own Lightning Bearer", "Be Your Own Person"],
            value: 1,
            correctAnswer: "Be Your Own Windkeeper",
            image: "assets/images/windkeeper.jpeg",
        },
        {
            question: "How many long-stemmed roses did Ross send to Emily?",
            answers: ["50", "102", "72", "500"],
            value: 2,
            correctAnswer: "72",
            image: "assets/images/ross.jpg",
        }];

    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 30;
    var intervalId;
    var userGuess = "";
    var running = false;
    var qCount = questions.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];



    $("#reset").hide();

    $("#start").on("click", function () {
        $("#start").hide();
        $(".play").hide();
        $("img").hide();



        displayQuestion();
        runTimer();
        for (var i = 0; i < questions.length; i++) {
            holder.push(questions[i]);
        }
    })

    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }

    function decrement() {
        $("#timeleft").html("00:" + timer);
        timer--;


        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answerblock").html("<p>Time is up! The correct answer is: " + pick.answers[pick.value] + "</p>");
            hidepicture();
        }
    }


    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    function displayQuestion() {

        index = Math.floor(Math.random() * questions.length);
        pick = questions[index];

        $("#questionblock").html("<h2>" + pick.question + "</h2>");
        for (var i = 0; i < pick.answers.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.answers[i]);

            userChoice.attr("data-guessvalue", i);
            $("#answerblock").append(userChoice);

        }




        $(".answerchoice").on("click", function () {

            userGuess = parseInt($(this).attr("data-guessvalue"));



            if (userGuess === pick.value) {
                stop();
                correctCount++;
                userGuess = "";
                $("#answerblock").html("<p>Correct!</p>");
                hidepicture();

            } else {
                stop();
                wrongCount++;
                userGuess = "";
                $("#answerblock").html("<p>Wrong! The correct answer is: " + pick.answers[pick.value] + "</p>");
                hidepicture();
            }
        })
    }


    function hidepicture() {
        $("#answerblock").append("<img src=" + pick.image + ">");
        newArray.push(pick);
        questions.splice(index, 1);

        var hidpic = setTimeout(function () {
            $("#answerblock").empty();
            timer = 30;


            if ((wrongCount + correctCount + unanswerCount) === qCount) {
                $("#questionblock").empty();
                $("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
                $("#answerblock").append("<h4> Correct: " + correctCount + "</h4>");
                $("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>");
                $("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>");
                $("#reset").show();
                correctCount = 0;
                wrongCount = 0;
                unanswerCount = 0;

            } else {
                runTimer();
                displayQuestion();

            }
        }, 3000);


    }

    $("#reset").on("click", function () {
        $("#reset").hide();
        $("#answerblock").empty();
        $("#questionblock").empty();
        for (var i = 0; i < holder.length; i++) {
            questions.push(holder[i]);
        }
        runTimer();
        displayQuestion();

    });



});

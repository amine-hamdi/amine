function Quiz(questions) {
 this.score = 0;
 this.questions = questions;
 this.questionIndex = 0;
}
 
    Quiz.prototype.getQuestionIndex = function() {
         return this.questions[this.questionIndex] ;
}
 
    Quiz.prototype.guess = function(answer) {
        if(this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++ ;
    }
 
        this.questionIndex++ ;
}
 
    Quiz.prototype.isEnded = function() {
        return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
            var element = document.getElementById("question");
            element.innerHTML = quiz.getQuestionIndex().text;
 
        
        var choices = quiz.getQuestionIndex().choices;
            for(var i = 0; i < choices.length; i++) {
                var element = document.getElementById("choice" + i);
                element.innerHTML = choices[i];
                guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
    
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
var questions = [
    new Question("How many time zones are there in Russia?", ["10", "15","11", "9"], "11"),
    new Question("What’s the national flower of Japan?", ["Alchemilla", "Flannel Flower", "Alyssum", "Cherry blossom"], "Cherry blossom"),
    new Question("How many stripes are there on the US flag?", ["15", "13","11", "12"], "13"),
    new Question("What’s the national animal of Australia?", ["Monkey", "lion", "Dog", "Kangaroo"], "Kangaroo"),
    new Question("How many days does it take for the Earth to orbit the Sun", ["264", "366", "367", "365"], "365")
];
 

var quiz = new Quiz(questions);
 

populate();


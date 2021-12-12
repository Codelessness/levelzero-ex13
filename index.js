// ex 13 : club everything to make the game
var readlineSync = require("readline-sync");

score = 0;

var userName = readlineSync.question("What's your name? ");

 console.log("Aapka swagat hai ! ", userName + " Do you know Ashutosh Game me ");

 // function start: 

 function game (question,answer){
   var userAnswer = readlineSync.question(question);

    if (userAnswer === answer){
      console.log("Bulkul sahi Jawab");
      score = score + 1;
    
    }
      else{
        console.log("Ye glat jawab hai!")
      } 

      console.log("current score : ", score);
      console.log("-------------------------")
 }

//array of objects
var question = [{
  question: "where do I live?",
  answer: "hajipur"
},
 {
   question: "What is my full name? ",
   answer: "ashutosh aman"
 },
 {
   question : "If I could bring a famous person back to life, who would it be?",
   answer: "sushant singh rajput"
  
 },
 {
   question: "Am I a dog or a cat person?",
   answer: "dog"
 }];

 //loop
 for(var i=0; i<question.length; i++){
   var currentQuestion = question[i];
   game(currentQuestion.question, currentQuestion.answer);
 }

 console.log("thankyou for playing the game!")

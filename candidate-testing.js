const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5+3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

candidateName = input.question("Candidate Name: "); 
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (i = 0; i < 5; i++) {
    candidateAnswers.push(input.question(`${[i+1]}) ${questions[i]}`));
    console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`);
  }
  
}


//candidateAnswers = candidateAnswers.toString().toUpperCase().split(',');
    


function gradeQuiz(candidateAnswers) {
  

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  /*for (let i = 0; i < correctAnswers.length; i++) {
    if (candidateAnswers[i] === correctAnswers[i]) {
      console.log("all correct");
    } else {
      console.log("try again");
    }
  }
  /*
/* let array1 = ["Sally Ride", "true", "40", "Trajectory", "3"];
let array2 = ["sally ride", "true", "40", "trajectory", "3"];

array1 = array1.toString().toUpperCase().split(',');
array2 = array2.toString().toUpperCase().split(',');

for (let i = 0; i < array1.length; i++) {
  if (array1[i] === array2[i]) {
  console.log("true");
  } else {
  console.log("false");
  }
} */

  let grade;
 
  
  return grade;
}

gradeQuiz();


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //

  // console.log(`Hello and welcome, ${candidateName}!`);

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
// variable to store questions

var currentQuestion = 0;

var questions = [
  {
    question: "How do you create a function in JavaScript?",
    choices: [
      "function = functionOne",
      "function functionOne()",
      "function: functionOne()",
      "functionOne()",
    ],
    answer: "function functionOne()",
  },
  {
    question: "How do you add a comment in JavaScript?",
    choices: [
      "// This would be a comment",
      "!-This would be a comment-!",
      "* This would be a comment *",
      "/--This would be a comment--/",
    ],
    answer: "// This would be a comment",
  },

  {
    question:
      "Which Math object would return a number rounded to its nearest integer?",
    choices: [
      "Number.round",
      "Math.round()",
      "addMathRound()",
      "Math.return.round",
    ],
    answer: "Math.round()",
  },
  {
    question: "What is the if statement used for?",
    choices: [
      "To create a new variable",
      "To print to the console log",
      "To specify a block of code that needs to be executed if a condition is true",
      "To execute any Javascript code that follows",
    ],
    answer:
      "To specify a block of code that needs to be executed if a condition is true",
  },
  {
    question: "What keywords are used to declare variables in JavaScript?",
    choices: [
      "var, let and const",
      "var, let and while",
      "let, for and else",
      "function, const and var",
    ],
    answer: "var, let and const",
  },
  {
    question: "What symbol do you use to multiply numbers in JavaScript?",
    choices: [
      "A plus and minus sign - +-",
      "A plus and an equals sign - +=",
      "An asterisk - *",
      "A dollar sign - $",
    ],
    answer: "An asterisk - *",
  },
];

// Get the value of currentInput and answerScreen
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');

// Get all buttons on the calculator
let buttons = document.querySelectorAll('button');

// Get specific buttons by their IDs
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

// Initialize an array to store real-time screen value
let realTimeScreenValue = [];
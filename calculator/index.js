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

// Event listener for the "Clear" button
clearbtn.addEventListener("click", () => {
    // Reset the real-time screen value and update the UI
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
});

// Event listeners for all buttons
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Check if the clicked button is not the "Erase" button
        if (!btn.id.match('erase')) {
            // Append the button's value to the real-time screen value and update the UI
            realTimeScreenValue.push(btn.value);
            currentInput.innerHTML = realTimeScreenValue.join('');

            // Evaluate the expression in real time if it contains only numbers
            if (btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }
     });
});
// $( document ).ready() block.
$(document).ready(function () {

  $(function () {
    init();
  });

  // Available Levels
  const levels = {
    easy: 4,
    medium: 3,
    hard: 2
  };

  // To change level
  const currentLevel = levels.medium;

  let time = currentLevel;
  let score = 0;
  let Playing;

  // DOM Elements
  const placeholder = document.querySelector('#placeholder');
  const currentWord = document.querySelector('#current-word');
  const scoreLayout = document.querySelector('#score');
  const timeLayout = document.querySelector('#time');
  const message = document.querySelector('#message');

  // Random Words  
  const words = [
    'algorithm',
    'program',
    'api',
    'division',
    'argument',
    'boolean',
    'bug',
    'orbitz',
    'char',
    'class',
    'addition',
    'conditionals',
    'javascript',
    'constants',
    'array',
    'declaration',
    'exception',
    'expression',
    'framework',
    'loop',
    'iteration',
    'keywords',
    'null',
    'operand',
    'variable',
    'pointer',
    'package',
    'runtime',
    'syntax',
    'token',
    'arity',
    'anonymous',
    'closure',
    'currying',
    'hoisting',
    'mutation',
    'sentinal',
    'vanilla',
    'pragma',
    'variadic'
  ];


  // Initialize the game
  function init() {
    // Load words from array
    displayWord(words);
    // Start matching on placeholder input
    $(placeholder).on('input', beginMatch)
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
  }

  // Start match
  function beginMatch() {
    if (matchWords()) {
      Playing = true;
      time = currentLevel + 1;
      displayWord(words);
      placeholder.value = '';
      score++;
    }

    // If score is -1, display 0
    if (score === -1) {
      scoreLayout.innerHTML = 0;
    } else {
      scoreLayout.innerHTML = score;
    }
  }

  // Match currentWord to placeholder value
  function matchWords() {
    if (placeholder.value === currentWord.innerHTML) {
      message.style.color = 'green';
      message.innerHTML = '<i class="fa fa-thumbs-up" ></i>';
      return true;
    } else {
      message.innerHTML = '';
      return false;
    }
  }

  // Pick & show random word
  function displayWord(words) {
    // Generate random array index
    const randArray = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randArray];
  }

  // Countdown timer
  function countdown() {
    // Make sure time is not run out
    if (time > 0) {
      // Decrement
      time--;
    } else if (time === 0) {
      // Game is over
      Playing = false;
    }
    // Show time
    timeLayout.innerHTML = time;
  }

  // Check game status
  function checkStatus() {
    if (!Playing && time === 0) {
      message.style.color = 'red';
      message.innerHTML = 'Game Over';
      score = -1;
    }
  }

});

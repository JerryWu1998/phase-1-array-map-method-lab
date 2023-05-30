const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(element => upFirstLetter(element));
}

function upFirstLetter(strings) {
  let result = '';
  let toUp = true;
  for (let s of strings) {
    if (toUp === true) {
      result += s.toUpperCase();
      toUp = false;
    } else if (s === ' ') {
      result += s;
      toUp = true;
    } else {
      result += s;
    }
  }
  return result;
}
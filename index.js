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
  return tutorials.map((sentence) => {
    const splitTutorials = sentence.split(' ');

    return  splitTutorials.map((words) => words.charAt(0).toUpperCase() + words.slice(1)).join(' ');
    
    //return titleCasedWords // Join the words to form a sentence
  });
};
console.log(titleCased())

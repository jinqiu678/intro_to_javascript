let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words, regex) {
  return words.filter(num => regex.test(num));
}

// test
console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
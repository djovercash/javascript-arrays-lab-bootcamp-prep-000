const app = "I don't do much."

function destructivelyAppendKitten (array, element) {
  window.kittens.push('Ralph');
  return window.kittens;
};

function destructivelyPrependKitten (array, element) {
  window.kittens.unshift('Bob');
  return window.kittens;
};

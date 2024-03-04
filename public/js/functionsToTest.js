/**
 * Retourne un objet contenant les arguments passés à la fonction.
 * @param {...*} args - Les arguments à inclure dans l'objet.
 * @returns {Object|string} Un objet contenant les arguments indexés ou une chaîne de caractères indiquant qu'aucun argument n'a été donné.
 */
const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach((arg) => {
      response[index] = arg;
      index++;
    });
  } else {
    response = "No argument was given to the function.";
  };
  return response;
};

/**
 * Multiplie chaque élément d'un tableau de nombres par deux.
 * @param {number[]} arrayOfNumbers - Le tableau de nombres à multiplier.
 * @returns {number[]|string} Un tableau de nombres multipliés par deux ou une chaîne de caractères indiquant que l'argument n'est pas un tableau de nombres.
 */
const multiplyAllByTwo = (arrayOfNumbers) => {
  let response;
  if (
    arrayOfNumbers.constructor.prototype === new [Array]().constructor.prototype
  ) {
    response = arrayOfNumbers.map((val) => val * 2);
    // console.log("arrayTimesTwo: ", arrayTimesTwo);
  } else {
    response = "The argument is not an Array of numbers";
  }
  return response;
};
module.exports = { returnAnObject, multiplyAllByTwo };

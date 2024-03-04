const { returnAnObject, multiplyAllByTwo } = require('./functionsToTest.js');

describe('returnAnObject', () => {
  test('retourne un objet vide si aucun argument n\'est donné', () => {
    expect(returnAnObject()).toBe("No argument was given to the function.");
  });

  test('retourne un objet contenant les arguments indexés', () => {
    expect(returnAnObject('a', 'b', 'c')).toEqual({ 0: 'a', 1: 'b', 2: 'c' });
  });

  test('retourne une chaîne de caractères si aucun argument n\'est donné', () => {
    expect(returnAnObject()).toEqual("No argument was given to the function.");
  });
});

describe('multiplyAllByTwo', () => {
  test('retourne un tableau de nombres multipliés par deux', () => {
    expect(multiplyAllByTwo([1, 2, 3])).toEqual([2, 4, 6]);
  });

  test('retourne une chaîne de caractères si l\'argument n\'est pas un tableau de nombres', () => {
    expect(multiplyAllByTwo("not an array")).toEqual("The argument is not an Array of numbers");
  });
});

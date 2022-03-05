const arrayFromString = (string, indexLimit) => {
  const array = [];

  for (let index = 1; index < indexLimit; index += 1) {
    const currentString = `${string}${index}`;
    array.push(currentString);
  }

  return array;
};

const maxLengthFoods = 20;
const maxLengthDrinks = 15;

const ingredient = 'strIngredient';

export const foodIngredientsArray = arrayFromString(ingredient, maxLengthFoods);
export const drinkIngredientsArray = arrayFromString(ingredient, maxLengthDrinks);

const measure = 'strMeasure';
export const measurementsArray = arrayFromString(measure, maxLengthFoods);

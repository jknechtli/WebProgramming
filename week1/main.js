
console.log('Task one:')
console.log('Hello world, Node.js');

console.log('\n\nTask two:')
const array = [1, 3, 4, 7, 11];

console.log(array);

array.push(18);

console.log(array);

array.unshift(2);

console.log(array);

array.splice(3, 0, 5);

console.log(array);

array.pop();

console.log(array);

array.splice(1, 1);

console.log(array);

array[4] = 100;

console.log(array);

const sort = (a, b) => {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}

array.sort(sort);

console.log(array);


console.log('\n\nTask three:')

const people = {
  people: [
    { firstname: 'Dav', Lastname: 'Id' },
    { firstname: 'Nish', Lastname: 'Ant' },
    { firstname: 'Pat', Lastname: 'Rick' }
  ]
};

console.log(people);

const peopleString = JSON.stringify(people)

console.log('\n')
console.log(peopleString);

const peopleBack = JSON.parse(peopleString)

console.log('\n')
console.log(peopleBack);


console.log('\n\nTask four:')

const arrayAdd = require('array-add-num');

const sum = arrayAdd([1, 2, 3, 4]);

console.log('Sum of Array is ' + sum);


console.log('\n\nTask five:');

function multiplyNums(x, y, z) {
  return 'new number is ' + x * y * z;
}

const functionExpression = function (x, y, z) {
  return 'new number is ' + x * y * z;
};

const arrowFunction = (x, y, z) => {
  return 'new number is ' + x * y * z;
};

console.log(multiplyNums(3, 2, 4));
console.log(functionExpression(3, 2, 4));
console.log(arrowFunction(3, 2, 4));
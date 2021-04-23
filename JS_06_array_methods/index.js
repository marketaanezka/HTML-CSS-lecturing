const greet = (name) => {
  return `Hello, dear ${name}`;
}

console.log(greet('Filip'));

const conciseGreet = (name) => `Hello, dearest ${name}`;

console.log(conciseGreet('Petra'));

const myArray = [4, 1, 6, 8, 16, -3, 9];

const animals = [
  {name: 'Želva', speed: 0.5},
  {name: 'Nosorožec', speed: 40},
  {name: 'Člověk', speed: 45},
  {name: 'Vrána', speed: 50},
  {name: 'Delfín', speed: 60},
  {name: 'Klokan', speed: 85},
  {name: 'Gepard', speed: 120},
  {name: 'Sokol', speed: 390},
]


for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

//foreach
myArray.forEach((item) => {
  console.log(item);
});

animals.forEach((animal) => console.log(animal.name));

//some
const biggerThanTen = myArray.some((item) => item > 10);
console.log(biggerThanTen);

const speedOverHundred = animals.some((animal) => animal.speed > 100);
console.log(speedOverHundred);

//every
const allPositive = myArray.every((item) => item > 0);
console.log(allPositive);

const speedOverOne = animals.every((animal) => animal.speed >= 1);
console.log(speedOverOne);

//filter
const filteredArray = myArray.filter((item) => item % 3 === 0);
console.log(filteredArray);

const veryFastAnimals = animals.filter((animal) => animal.speed >= 50);
console.log(veryFastAnimals);

//map
const doubledArray = myArray.map((item) => item * 2);
console.log(doubledArray);

const nameAndSpeed = animals.map((animal) => {
  return `${animal.name}: ${animal.speed} km/h`;
})

console.log(nameAndSpeed);
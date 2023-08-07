const fs = require('fs');

const genders = [ 'M', 'F' ];
const maleNames = [ 'John', 'Alex', 'Gorge', 'Tom' ];
const femaleNames = [ 'Anne', 'Kris', 'Bella', 'Sarah' ]; 
const lastNames = [ 'Doe', 'Nowak', 'Kowalski', 'Ratajkowsky' ];

function randChoice(arr) {

    if (arr.length === 0) {
        return undefined;
    };

    const randomIndex = Math.floor(Math.random() * arr.length);

    return arr[randomIndex];
};

function getRandomAge() {
    // Generate a random number between 0 and 1 (inclusive of 0, exclusive of 1)
    const randomFraction = Math.random();
  
    // Scale the random number to the desired range (78 - 18 = 60)
    const scaledRandom = randomFraction * 60;
  
    // Shift the scaled random number to start at 18
    const randomAge = Math.floor(scaledRandom) + 18;
  
    return randomAge;
  };
  
const people = [];

for (let i = 0; i < 20; i++) {

    const person = {};

    person.gender = randChoice(genders);
    if (person.gender === 'M') {
        person.firstName = randChoice(maleNames);
    } else {
        person.firstName = randChoice(femaleNames);
    };

    const randomLastName = Math.floor(Math.random() * lastNames.length);

    person.lastName = lastNames[randomLastName];

    person.age = getRandomAge();

    people.push(person);

    
};

const jsonPeople = JSON.stringify(people);

// Write the JSON data to a file named 'people.json'
fs.writeFile('people.json', jsonPeople, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
    } else {
      console.log('Data has been saved to people.json');
    }
  });
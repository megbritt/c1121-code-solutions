function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var seconds = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResult:', seconds);

function greet(name) {
  return 'Hey, ' + name;
}

var greeting = greet('Megan');

console.log('greetingResult:', greeting);

function getArea(width, height) {
  return width * height;
}

var area = getArea(17, 42);

console.log('getAreaResult:', area);

function getFirstName(person) {
  return person.firstName;
}

var firstNameOnly = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('getFirstNameResult:', firstNameOnly);

function getLastElement(array) {
  return array[array.length - 1];
}

var finalElement = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('getLastElementResult:', finalElement);

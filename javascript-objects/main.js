var student = {
  firstName: 'Megan',
  lastName: 'Martinez',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;

student.livesInIrvine = false;
student.previousOccupation = 'CNA';

console.log('value of fullName', fullName);
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'Toyota',
  model: 'Prius',
  year: 2015
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Buddy',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);

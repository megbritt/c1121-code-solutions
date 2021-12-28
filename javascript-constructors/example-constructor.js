function ExampleConstructor() { }

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();

console.log('value of newExampleConstructor:', newExampleConstructor);

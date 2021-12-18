var bookshelf = [
  {
    isbn: '978-0064407663',
    title: 'A Series of Unfortunate Events #1',
    author: 'Lemony Snicket'
  },
  {
    isbn: '978-0143106159',
    title: 'Jane Eyre: (Penguin Classics Deluxe Edition)',
    author: 'Charlotte Bronte'
  },
  {
    isbn: '987-0152023984',
    title: 'The Little Prince (Hardcover)',
    author: 'Antoine de Saint-Exupéry'
  }
];

console.log('bookshelf:', bookshelf);
console.log('typeof bookshelf:', typeof bookshelf);

var madeFirstJsonString = JSON.stringify(bookshelf);

console.log('JSON.stringify(bookshelf)', madeFirstJsonString);
console.log('typeof JSON.stringify(bookshelf)', typeof madeFirstJsonString);

var student = '{ "name": "Megan Martinez", "id": 5552123 }';

console.log('student:', student);
console.log('typeof student', typeof student);

var json = JSON.parse(student);

console.log('json:', json);
console.log('typeof json', typeof json);

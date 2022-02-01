/* exported Student */
class Student {
  constructor(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getIntroduction() {
    const fullName = this.getFullName();
    return `Hello, my name is ${fullName} and I am studying ${this.subject}.`;
  }
}

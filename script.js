class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying.`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching.`);
  }
}

// Example usage:
const john = new Student('John', 20);
const sarah = new Teacher('Sarah', 35);

john.study(); // Output: "John is studying."
sarah.teach(); // Output: "Sarah is teaching."



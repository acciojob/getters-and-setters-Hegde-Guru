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

  get age() {
    return this._age;
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

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

// Test the classes
const person1 = new Person("John", 30);
console.log(person1.name); // Output: John
person1.age = 31; // Set age using the setter
console.log(person1.age); // Output: 31

const student1 = new Student("Alice", 20);
student1.study(); // Output: Alice is studying.

const teacher1 = new Teacher("Professor Smith", 45);
teacher1.teach(); // Output: Professor Smith is teaching.


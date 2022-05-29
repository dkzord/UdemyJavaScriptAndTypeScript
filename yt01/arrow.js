const person = {
  firstName: 'John',
  lastName: 'Doe',
};

function fullName() {
  return `${this.firstName} ${this.lastName}`;
}

const boundFullName = fullName.bind(person);
// console.log(boundFullName());


const fullNameArrow = () => `${this.firstName} ${this.lastName}`;
const boundFullNameArrow = fullNameArrow.bind(person);

// Arrow function não existe this dentro dela.
// Arrow function não pode ser uma construction function;
console.log(boundFullNameArrow());

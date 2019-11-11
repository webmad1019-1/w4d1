let student = {
  name: "quique",
  salary: 828282882,
  dept: ["web", "devops"],
  address: {
    street: "1 palacio de la moncloa",
    city: "madrid"
  }
};

let { name, salary, address } = student;
// let name = student.name;
// let salary = student.salary;
// console.log(name);
// console.log(salary);
console.log(address.street);

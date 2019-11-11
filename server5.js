let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 20, 30, 40, 90];

let arrayMerged = [...array1, ...array2, ...array2];
// console.log(arrayMerged);

let student = {
  name: "quique",
  salary: 828282882,
  dept: ["web", "devops"],
  address: {
    street: "1 palacio de la moncloa",
    city: "madrid"
  }
};

// let newShallowClonedStudent = { ...student };

// newShallowClonedStudent.name = "estefi";
// console.log(student);
// console.log(newShallowClonedStudent);

let newDeepClonedStudent = JSON.parse(JSON.stringify(student));
console.log(JSON.stringify(student));
console.log(newDeepClonedStudent);

<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Introduction</title>
</head>
<body>
  <h1>JavaScript Introduction</h1>
  
    // 1. Variables
    let name = "Joshua";
    const age = 20;

    // 2. Data Types
    let str = "Hello";         // String
    let num = 25;              // Number
    let bool = true;           // Boolean
    let arr = [1, 2, 3];       // Array

    // 3. Operators
    // Arithmetic
    let a = 10, b = 5;
    console.log("a + b =", a + b);
    console.log("a - b =", a - b);
    console.log("a * b =", a * b);
    console.log("a / b =", a / b);
    console.log("a % b =", a % b);

    // Comparison
    console.log("a == b:", a == b);
    console.log("a === b:", a === b);

    // 4. Functions
    // Normal Function
    function greet() {
      console.log("Hello");
    }
    greet();

    // Function with Parameters
    function add(a, b) {
      return a + b;
    }
    console.log("add(3, 4) =", add(3, 4));

    // 5. Loops
    // while Loop
    let i = 0;
    while (i < 5) {
      console.log("while loop:", i);
      i++;
    }

    // do...while Loop
    i = 0;
    do {
      console.log("do...while loop:", i);
      i++;
    } while (i < 5);

    // 6. Arrays
    let fruits = ["apple", "banana", "mango"];
    fruits.push("orange");   // Add item
    fruits.pop();            // Remove last item
    console.log("First fruit:", fruits[0]);

    // 7. Objects
    let student = {
      name: "Joshua",
      age: 20,
      greet: function() {
        console.log("Hello, I'm " + this.name);
      }
    };
    student.greet();

    // 8. ES6 Features
    // Arrow Function
    const sum = (a, b) => a + b;
    console.log("Arrow Function sum(2, 3):", sum(2, 3));

    // Destructuring
    let person = { firstName: "John", age: 30 };
    let { firstName, age: personAge } = person;
    console.log("Destructured:", firstName, personAge);

    // Spread Operator
    let arr1 = [1, 2];
    let arr2 = [...arr1, 3, 4];
    console.log("Spread Array:", arr2);

    let obj1 = { a: 1 };
    let obj2 = { ...obj1, b: 2 };
    console.log("Spread Object:", obj2);
  </script>
</body>
</html>

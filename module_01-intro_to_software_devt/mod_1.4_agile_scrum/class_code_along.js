// class Person {
//     name=null; // property
//     age=0; // property

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     log_constructor(){
//       console.log(this.constructor.name); // Outputs Person
//     }

//     introduce(){
//         console.log(`Hi, my name is ${this.name}. I am ${this.age} years old`);
        
//     }
// }

// // new Person('Ace', 30).introduce();

// const cp = new Person('Chen Pang', 100);
// // cp.introduce();
// cp.log_constructor();
//========================================================================================
// // Saturday Coaching Class

// // Show difference between '==' and '==='
// console.log("23" == 23);
// console.log("23" === 23);

//========================================================================================
// // Practice declaring and using private variables
// class VariablesTest {

//   #privateVariable;

//   constructor(private_, public_) {
//     this.#privateVariable = private_;
//     this.publicVariable = public_;
//   }

//   variableChange(){
//     this.#privateVariable = 'Changed Private';
//     this.publicVariable = 'Changed Public'
//     console.log(this.#privateVariable); // Outputs 'Changed Private'
//     console.log(this.publicVariable); // Outputs 'Changed Public'
//   }
// }

// const testVar = new VariablesTest('I am Private', 'I am Public');

// // Before change
// console.log(testVar.privateVariable) // Outputs 'undefined'
// console.log(testVar.publicVariable) // Outputs 'I am Public

// testVar.variableChange();

// // After change
// console.log(testVar.privateVariable) // Outputs 'undefined'
// console.log(testVar.publicVariable) // Outputs 'Changed Public'

//========================================================================================
// Trying concepts of Static objects, Private variables,
// Inheritance, and Methods

// class Animal {

//   #age

//   constructor(name, age) {
//     this.name = name;
//     this.tricks = 0;
//     this.#age = age;
//   }

//   static meal = {
//     breakfast: 'chicken',
//     lunch: 'pork',
//     dinner: 'beef'
//   }

//   addTricks(newTricks) {
//     this.tricks += newTricks; 
//     return this.tricks;
//   }

//   animalFunc() {
//     const accessAge = this.#age;
//     console.log(accessAge);
    
//     const brekkie = Animal.meal.breakfast;
//     console.log(brekkie);
//   }
// }

// class Dog extends Animal {
//   #vax;
//   constructor(name, age, vax) {
//     super(name, age);
//     this.#vax = vax;
//   }

//   dogFunc() {
//     this.animalFunc()
//   }

//   checkStatic() {
//     console.log(Animal.meal.dinner);
//     // console.log(this.meal.dinner);
//   }

// }

// const myDog = new Dog('Jack', 2, 1);

// myDog.dogFunc();

// console.log(myDog.name);
// console.log(myDog.age);
// console.log(myDog.vax);
// console.log(myDog.tricks);

// console.log(myDog.addTricks(3));
// console.log(myDog.addTricks(2));

// console.log(Animal.meal.lunch);
// // console.log(myDog.meal.dinner);

// myDog.checkStatic();

// myDog.animalFunc();
//========================================================================================
// class Permission {
//   // These are static constants that show what are the possible values when checking permission.
//   static OperationsConst = {
//     CREATE: "CREATE",
//     READ: "READ",
//     UPDATE: "UPDATE",
//     DELETE: "DELETE",
//   };
//   static RolesConst = {
//     OWNER: "OWNER",
//     EDITOR: "EDITOR",
//     READER: "READER",
//   };

//   // private variables
//   #role;
//   #operation;

//   // constructor
//   constructor(role, operation) {
//     if (this.constructor.name === "Permission") {
//       throw new Error("This class cannot be instantiated");
//     }
//     this.#role = role;
//     this.#operation = operation;
//   }

//   // function
//   check() {
//     const ops = this.#operation.toUpperCase();

//     switch (this.#role.toUpperCase()) {
//       case Permission.RolesConst.OWNER:
//         return true;
//       case Permission.RolesConst.EDITOR:
//         if (
//           ops === Permission.OperationsConst.READ ||
//           ops === Permission.OperationsConst.CREATE ||
//           ops === Permission.OperationsConst.UPDATE
//         ) {
//           return true;
//         }
//         return false;
//       case Permission.RolesConst.READER:
//         if (ops === Permission.OperationsConst.READ) {
//           return true;
//         }
//         return false;
//       default:
//         return false;
//     }
//   }
// }

// // Add code here
// class Document extends Permission {
//   #content;
//   constructor(role, operation, content) {
//     super(role, operation);
//     this.#content = content;
//   }

//   process() {
//     switch (this.check()) {
//       case true:
//         console.log("Allowed");
//         break;
//       case false:
//         console.log("Blocked");
//         break;
//       default:
//         // Do nothing
//         break;
//     }
//   }
// }


// const doc3 = new Document(
//   Permission.RolesConst.OWNER,
//   Permission.OperationsConst.DELETE,
//   "Hello content"
// );
// doc3.process(); // "Allowed"

// console.log(doc3.check())
// console.log(doc3)
// console.log(Permission.OperationsConst.CREATE)
// console.log(Permission.RolesConst.READER)

// const doc4 = new Document(
//   'OWNER',
//   'DELETE',
//   "Hello content"
// )

// doc4.process()
//========================================================================================
// Trying concepts of Higher Order Functions

// const tooLongDidntRead = () => {
//   console.log("Too long; Didn't Read");
// }

// const tldr = tooLongDidntRead;
// tldr();

// console.log(tldr.name);

// const higherOrderFunc = param => {
//   console.log(param());
//   return `I just invoked ${param.name} as a callback function!`;
// }

// const anotherFunc = () => {
//   return "I'm being invoked by the higher-order function!";
// }

// console.log(higherOrderFunc(anotherFunc));

// const outerFunc = () => {
//   const innerFunc = () => {
//     console.log(`I am ${innerFunc.name}`);
//     return 42;
//   }
//   return innerFunc;
// }

// console.log(outerFunc()());


// 1 - function that returns a function
// function myFunction() {
//   function innerFn() {
//      console.log("inner function called!");
//   }
//  return innerFn;
// }

// myFunction()(); //  inner function called!

// 2 - function that takes another function as argument
// function timeoutFn() {
//  console.log("Timed out in 1,000!");
// }
// setTimeout(timeoutFn, 1000);  // Timed out!


// const timeOutFunc = () => {
//   console.log('Timed out in 10,000!');
// }

// setTimeout(timeOutFunc, 10000)
//===========================================================
// const priceList = [10.5, 9.9, 8.9, 4.5];

// Pass function as parameters method 1
// const sumCalc = (priceArray) => {
//   return priceArray.reduce((acc, currVal) => {
//     return acc + currVal;
//   }, 0);
// };

// const gstCalc = (sumCalc, priceArray) => {
//   totalPrice = sumCalc(priceArray);
//   return totalPrice * 1.07;
// }

// console.log(gstCalc(sumCalc, priceList));

// // Pass function as parameters method 2
// const gstCal = (totalP) => {
//   return totalP * 1.07;
// }

// const totalCal = (priceArray, gstFunc) => {
//   const totalPrice = priceArray.reduce((acc, currVal) => {
//     return acc + currVal;
//   }, 0);

//   return gstFunc(totalPrice);
// }

// console.log(totalCal(priceList, gstCal));

//===========================================================
// Nested functions
// Return function
// const sumFunc = (priceArray) => {
//   const totalPrice = priceArray.reduce((acc, currVal) => {
//     return acc + currVal;
//   }, 0);

//   const gstFunc = () => {
//     const payablePrice = totalPrice * 1.07;
//     return payablePrice;
//   };

//   return gstFunc();
// };

// console.log(sumFunc(priceList));
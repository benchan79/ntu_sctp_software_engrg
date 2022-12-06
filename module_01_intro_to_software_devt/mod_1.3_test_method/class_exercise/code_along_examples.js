// const num1 = 10;
// const num2 = "20";
// const num3 = num1 + num2;
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(typeof(num3));
// const flag1 = true;
// const flag2 = "";
// console.log(flag1);
// console.log(flag2);

// console.log(typeof(flag1));
// console.log(typeof(flag2));

// if (flag2) {
//     console.log("I am a frog");
// } else {
//     console.log("I am a prince");
// }

// if (typeof(flag1) === 'boolean') {
//     console.log('flag1 is a boolean')
// }

// let array = [10, 20, "30"];
// console.log(array);

// let array = [10, 20, "30"];
// console.log(array[0]);

// loop
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element)
// }

// array.forEach(element => {
//     console.log(element);
// });

// for (const element of array) {
//     console.log(element)
// };

// const empty = {}
// console.log(empty)

// const person = {
//     name: "John Doe",
//     yearOfBirth: 1987,
//     "year Of Birth": 1987,
//     pet: "dog",
//     color: "blue",
//     42: 42
// }

// console.log(person);
// console.log(person.yearOfBirth);

// for (const key in person) {
//     console.log("key = ", key, "value = ", person[key]);
// }

// console.log(person["name"]);
// console.log(person.name);

// console.log(person["year Of Birth"]);
// console.log(person[42]);

// const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

// function printStudentNames(){
//     for (let index = 0; index < studentList.length; index++) {
//         const element = studentList[index];
//         console.log(element);
//     }
// }

// printStudentNames();

// const bookIdArr = ["NLB1", "NLB2", "NLB3", "NLB4"];
// const bookTitle = ["Lord of the Rings", "Programming for Dummies", "Introduction to Software Testing", "How to be a Software Developer"];
// let booksObj = {}; 

// function convert(keyArr, valueArr){
//     let bookRecord = {};
//     for (let i = 0; i < keyArr.length; i++) {
//         const bookID = keyArr[i];
//         const bookName = valueArr[i];
//         bookRecord[bookID] = bookName;    
//     }
//     return bookRecord;
// }

// function printByKey(key){
//     console.log(booksObj[key]);
// }

// booksObj = convert(bookIdArr, bookTitle);
// printByKey("NLB2"); // prints "Progamming for Dummies"

// console.log(booksObj)

// envList = ['DEV', 'STAGE', 'PROD', 'foo']

// const checkEnv = env => {
//     switch(env){
//         case 'DEV':
//             return 'devuser:password';
//         case 'STAGE':
//             return 'stageuser:password';
//         case 'PROD':
//             return 'produser:password';
//         case 'DEV':
//         default:
//             return 'Invalid';
//     }
// };

// for (let i = 0; i < envList.length; i++) {
//     const env = envList[i];
//     const databaseCredential = checkEnv(env);

//     if (databaseCredential === 'Invalid'){
//         console.log('Invalid environment selection. Please select DEV, STAGE or PROD.');
//     } else {
//         console.log(`Database credential for environment ${env} is ${databaseCredential}`);
//     }
// }
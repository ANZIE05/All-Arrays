//  FOR LOOP (use for repeatation the code) ====> (Arrays and for loop have both a very strong combination together)
// console.log("Start");
// for (let i = 0; i < 10; i++){
// console.log("Hello world");
// }
// console.log("End");
// //                                   ________________________________________
// //    Arrays and for loop example 
// let students: string[] = ['Ahamd', 'Ali', 'Bilal', 'Kashif'];
// for (let i = 0; i < students.length; i++) {
//     console.log(`Assalam alaikum ${students[i]}`);
// }
//                   ___________________________________________
//  WHILE LOOP (executing a block of code until certain condition (true condition) becomes false)
// let i = 0;
// while (i <= 5){
//     console.log(i);
//     i++
// }   // output: counting 0 - 5
// //                                       OR
// let a = 1;
// while (a <= 10){
//     console.log(`6 x ${a} = ${a * 6}`);
//     a++
//}   // output: complete table of 6
//                                           ____________________________________________________
// DO WHILE LOOP (first executes the block of code and then checks the condition)
var q = 0;
do {
    console.log("Welcome");
    q++;
} while (q < 5);
// FOR-IN-LOOP (it is used to iterate over the properties of an object)
var personDetails = {
    name: "Moosa",
    age: 25,
    country: "Pakistan",
    loggedIn: true,
};
for (var keys in personDetails) {
    console.log(keys);
} // output: prints only keys
//                                        --------------------OR----------------------
var personDetails1 = {
    name: "Moosa",
    age: 25,
    country: "Pakistan",
    loggedIn: true,
};
for (var bio in personDetails) {
    console.log("".concat(bio, " : ").concat(personDetails[bio]));
} // output: prints both keys and values
//                                               ___________________________________________________
// FOR-OF-LOOP (it is used to iterate over Arrays, Strings.)
var favFruit = ['mango', 'banana', 'watermelon', 'orange', 'berries'];
for (var _i = 0, favFruit_1 = favFruit; _i < favFruit_1.length; _i++) {
    var fruitList = favFruit_1[_i];
    console.log(fruitList); // output: prints fruits list
    console.log("".concat(fruitList, " => ").concat(fruitList.toLocaleUpperCase())); // output: prints both lower and upper case
}
//                     -------------------------STRING----------------------------------
var myName = "eshaal";
for (var _a = 0, myName_1 = myName; _a < myName_1.length; _a++) {
    var nameInList = myName_1[_a];
    console.log(nameInList);
} // output: prints name in vertical form 
// //                     ----------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------------
// // Make a table of 2 through for loops (prints only result)
// for (let table = 1; table <= 5; ++table){
// console.log(table * 2);
// }
// // // ---------------------------------------------------------------
// // // Make a table of 2 through for loops (prints complete table)
// console.log("Start");
// for (let i = 1; i <= 10; ++i){
// let makingTable = 2;
// console.log(`2 x ${i} = ${makingTable*i}`);
// };
// console.log("Stop!");
// //                       ---------------------xxxxxxxxxxxxxxxxxxxx------------------------
// // Make a table of 2 through for Recursive Function (prints only result)
// function table(n:number,result:number[]=[]){
//         if(n <=0) {
//             return result;  
//         }
//         result.push(n * 4);
//         return table(n - 1, result);
//     }
//     console.log(table(5));
// // //                    ------------------------------------------------
// // // Make a table of 2 through for Recursive Function (prints complete table)
// function printTable(n: number){
//     if (n > 10) {
//         return;
//     }
//     console.log(`4 x ${n} = ${4 * n}`);
//     printTable(n + 1);
// }
// printTable(1);
// //             -------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------------------
// // Make a Pyramid through star pattern by using nested do while loop
// let starPattern = 10;
// let column = 1;
// do{
//     let stars = "";
//     let moon = "";
//     let numStars = 1;
//     do{
//         stars += "*";
//         moon += "("
//         numStars++;
//     } while (numStars <= column);
//     console.log(stars);
//     console.log(moon);
//     column++;
//     } while (column <= starPattern);
//     //                      ----------------------xxxxxxxxxxxxxxxxxxxxxxxx----------------------

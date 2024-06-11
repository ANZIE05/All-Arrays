// ARRAYS
var pastaRecipe = ["pasta", "chicken", "cream", "mayonise", "cheese", "butter", "all purpose floor", "milk", "spices"];
console.log(pastaRecipe);
// ARRAY PROPERTY
var pastaRecipe1 = ["pasta", "chicken", "cream", "mayonise", "cheese", "butter", "all purpose floor", "milk", "spices"];
console.log(pastaRecipe1.length);
var pastaRecipe2 = ["pasta", "chicken", "cream", "mayonise", "cheese", "butter", "all purpose floor", "milk", "spices"];
console.log(pastaRecipe2[5]);
console.log(pastaRecipe2[8]);
console.log(pastaRecipe2[9]);
// ARRAY METHODS
// PUSH (add) => perform on last element
var pastaRecipe01 = ["pasta", "chicken", "cream", "mayonise", "cheese", "butter", "all purpose floor", "milk", "spices"];
pastaRecipe01.push("sausages");
console.log(pastaRecipe01);
// POP (remove) => perform on last element
var pastaRecipe02 = ["pasta", "chicken", "cream", "mayonise", "cheese", "butter", "all purpose floor", "milk", "spices"];
pastaRecipe02.pop();
console.log(pastaRecipe02);
// UNSHIFT (add) => perform on first element
var pastaRecipe03 = ["pasta", "chicken", "cream", "mayonise", "cheese", "butter", "all purpose floor", "milk", "spices"];
pastaRecipe03.unshift("sausages");
console.log(pastaRecipe03);
// SHIFT (remove) => perform on first element
var pastaRecipe04 = ["pasta", "chicken", "cream", "mayonise", "cheese", "butter", "all purpose floor", "milk", "spices"];
pastaRecipe04.shift();
console.log(pastaRecipe04);
// SLICE METHOD
//                            (if you wish to take some items from original list)
var grocery = ["coriander", "mint", "apple", "banana", "mango", "melon", "tomato"];
//                 0           1       2        3          4       5         6   
console.log(grocery.slice(2, 6));
//                            (if you wish to take all items till end, then no need to mention second parameter)
var grocery1 = ["coriander", "mint", "apple", "banana", "mango", "melon", "tomato"];
//                 0           1       2        3          4       5         6   
console.log(grocery.slice(2));
//                            (if you want to print both list, original and copy)
var originalList = ["coriander", "mint", "apple", "banana", "mango", "melon", "tomato"];
var copyList = originalList.slice(2, 6);
console.log("Its your original list ".concat(originalList));
console.log("Its your copy list ".concat(copyList));
//  SPLICE METHOD
var grocery2 = ["coriander", "mint", "chilgozay", "avacado", "kiwi", "yellow capcicum", "tomato"];
//                   0          1         2          3          4           5               6   
//                        (where from remove => first index , how much items wnt to remove => second index)
console.log(grocery2.splice(2, 4));
// ************************************************************************************************************
//                         (if you wish to replace some items)
var grocery3 = ["coriander", "mint", "chilgozay", "avacado", "kiwi", "yellow capcicum", "tomato"];
//                 0           1         2           3          4           5              6   
grocery3.splice(2, 4, "milk", "yogurt", "cheese");
console.log(grocery3);
// **********************************************************************************************************
//                         (if you dont want to remove any item and add more items)
var grocery4 = ["coriander", "mint", "chilgozay", "avacado", "kiwi", "yellow capcicum", "tomato"];
//                 0           1         2           3          4           5              6   
grocery4.splice(2, 0, "milk", "yogurt", "cheese");
console.log(grocery4);
// **********************************************************************************************************
//                         (if you want to do both remove and add any item)
var grocery5 = ["coriander", "mint", "chilgozay", "avacado", "kiwi", "yellow capcicum", "tomato"];
//                 0           1         2           3          4           5              6   
grocery5.splice(2, 3, "milk", "yogurt", "cheese");
console.log(grocery5);
// ************************************************************************************************************
var groceryNew = ["coriander", "mint", "apple", "banana", "mango", "melon", "tomato"];
//                     0           1       2        3         4        5        6     
groceryNew[0] = "1 bunch of coriander";
groceryNew[4] = "5kg mango";
console.log(groceryNew); // output ['1 bunch of coriander','mint','apple','banana','5kg mango','melon','tomato']
// -----------------------------------------------------------------
var groceryNew1 = ["coriander", "mint", "apple", "banana", "mango", "melon", "tomato"];
console.log(groceryNew1[groceryNew1.length - 1]); // output tomato
// -----------------------------------------------------------------
//                         (How to access last element of array dynamically)
var groceryNew2 = ["coriander", "mint", "apple", "banana", "mango", "melon", "tomato"];
console.log(groceryNew2.length - 1); // output = 6 (7 - 1)
// ******************************************************************************************************
//MULTIDIMANTIONAL ARRAYS (ARRAYS OF ARRAY)
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] // 2 index
    //   0, 1 ,2 
];
console.log(matrix[2]); // outut [7, 8, 9]
console.log(matrix[2][1]); // output 8
//  TUPLES
var tupleExample = ["Aaliyan", 1234, true];
console.log(tupleExample);

//task1
let sum=0;
let arr = [1,2,3,4,7,'str','13']; 
arr.forEach(myFunction);

function myFunction(item) {
    item = Number(item)
    if (!isNaN(item))
        sum += item;
}
console.log(sum);

//task2
let arr1 = [1,2,3,4,2,8]
let arr2 = [...new Set(arr1)];

console.log(arr2);


//Alternate
let arr3 = arr1.filter((x, ind) =>  arr1.indexOf(x) == ind );

console.log(arr3);

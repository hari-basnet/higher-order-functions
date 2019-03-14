//const itCompanies = [ 'Facebook', 'Google', 'Microsoft','Integrify', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//let itCompanies = [1,2,3];

//print the array using normal loop

// for(let i = 0; i < itCompanies.length; i++){

//     console.log(itCompanies[i]);
// }

//reverse the array 

// console.log(itCompanies.reverse());

// for(i = itCompanies.length - 1; i >= 0; --i){

//     console.log(itCompanies[i]);
// }

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// var total = numbers.reduce(function(total, number) {
//     return total + number;
// });

// console.log(total);

// function sayHello(){
//     console.log('hello');
// }

// sayHello();

// let interval = setInterval(sayHello,5000);
// clearInterval(interval);

// function sayGoodBye (){
//     console.log('moi moi');
// }

// setTimeout(sayGoodBye,3000);

// const person = {

//     name : 'Hari',
//     age: 1500,
//     address: {
//         street: 'Pihkalankatu 5',
//         postBox: 20110,
//         city: 'Turku'
//     },
//     getInfo: function(){
//         return `I am ${this.name} and I live in ${this.address.city}. I am ${this.age} years old.`;
//     }

// };

// console.log(person.getInfo());
// console.log(person.address.city);

// person.job = 'student';

// Exercises 

const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1 
// Explain the difference between forEach, map, filter, and reduce.

// The difference between them is that the foreach method loops through every iterable array and execurtes
// a provided function to the items of the array 
// returns undefined otherwise sth is returned by the provided function

// Map
// map method loops through the array and returns a new modified array of same length 

// filter 
// filter method loops through the array and checks the given condition and returns a new array 
// containing elements that passes the condition

// reduce
// reduce method returns a single value, it could be boolean, object, new array
// good for addition of the array elements and all

// 2
// Use forEach to console.log each country in the countries array.
countries.forEach(function(country){
    console.log(country);
});

// 3
// Use forEach to console.log each name in the names array.

names.forEach(function(name){
    console.log(name);
});

// 4
// Use forEach to console.log each number in the numbers array.
newNumbers.forEach(function (number) {
    console.log(number);
});

// 5
// Use map to create a new array by changing each country to uppercase in the countries array;
let updatedArray = countries.map(function (country){
    return country.toUpperCase();
});

// 6
// Use map to create a new array by changing each number to square in the numbers array
let squaredNumbers = newNumbers.map(function (number){
    return number * number;
})
console.log(squaredNumbers);

// 7
// Use map to change to each name to uppercase in the names array
let changedNames = names.map(function (name){
    return name.toUpperCase();
});
console.log(changedNames);

// 8
// Use filter to filter out countries containing land.
let countryWithLand = countries.filter(function (country){
    return country.match(/[Ll]and/);
});
console.log(countryWithLand);


// dom manipulatio randomm



// creating dom element 


let titles;
const container = document.querySelector('.container');
for(let i = 0; i < 20; i++){
    titles = document.createElement('div');
    titles.textContent = 'I am a saint';
    container.appendChild(titles);

}

// 9
// Use filter to filter out countries having six character.
let countryLengthSix = countries.filter(function(country){
    return country.length === 6;
})
console.log(countryLengthSix);

// 10
// Use filter to filter out countries containing six letters in the counntry array.

// 11
// Use filter to filter out country start with 'E';
let countriesNameE = countries.filter(function(country){
    return country.indexOf('Finland');
})
console.log(countriesNameE); //????????????????????????

// 12
// Declare a function called getStringLists which takes an array 
// as a parameter and then returns an array only with string items.

const mixedArray = [1, 'Pandora', 33, undefined, 'tea and code', 9, 7, true];

function getStringLists (array){

    let result = array.filter(element => {
        return typeof element === 'string';        
    });

    return result;
}
console.log(getStringLists(mixedArray));

// 13
// Use reduce to sum all the numbers in the numbers array.
let reduced = newNumbers.reduce((total, number) => { // reduce takes two paameters 
    return total + number;
});
console.log(reduced);

// 14
// Use reduce to concatinate all the countries and to produce this sentence: 
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let concatSentence = countries.reduce((ses, element) => {

    return ses =ses + element+ ' ' ;
}) 
console.log(concatSentence);

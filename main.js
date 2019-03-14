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

// const countries = ['Estonia', 'Finland', 'Sweden','Uzbekistan', 'Denmark', 'Norway', 'IceLand', 'pakistan'];
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
// Define a call function before you them in forEach, map, filter or reduce.



// 3
// Use forEach to console.log each country in the countries array.
// countries.forEach(function(country){
//     console.log(country);
// });

// 4
// Use forEach to console.log each name in the names array.

names.forEach(function(name){
    console.log(name);
});

// 5
// Use forEach to console.log each number in the numbers array.
newNumbers.forEach(function (number) {
    console.log(number);
});

// 6
// Use map to create a new array by changing each country to uppercase in the countries array;
let updatedArray = countries.map(function (country){
    return country.toUpperCase();
});

// 7
// Use map to create a new array by changing each number to square in the numbers array
let squaredNumbers = newNumbers.map(function (number){
    return number * number;
})
console.log(squaredNumbers);

// 8
// Use map to change to each name to uppercase in the names array
let changedNames = names.map(function (name){
    return name.toUpperCase();
});
console.log(changedNames);

// 9
// Use filter to filter out countries containing land.
let countryWithLand = countries.filter(function (country){
    return country.match(/[Ll]and/);
});
console.log(countryWithLand);

// 10
// Use filter to filter out countries having six character.
let countryLengthSix = countries.filter(function(country){
    return country.length === 6;
})
console.log(countryLengthSix);

// 11
// Use filter to filter out countries containing six letters in the counntry array.

// 12
// Use filter to filter out country start with 'E';
let countriesNameE = countries.filter(country =>
    country.indexOf(0) == 'E')
console.log(countriesNameE);

// 13
// Chain two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))


// 14
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

// 15
// Use reduce to sum all the numbers in the numbers array.
let reduced = newNumbers.reduce((total, number) => { // reduce takes two paameters 
    return total + number;
});
console.log(reduced);

// 16
// Use reduce to concatinate all the countries and to produce this sentence: 
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let concatSentence = countries.reduce((acc, val, currentIndex)  => {
    

}) 
// console.log(concatSentence);


// 17
// some 

// every


// 18
// Use some to check if some names' length greater than seven in names array
const checkNames = names.some((name) => {

    return name.length > 7;
})

console.log(checkNames);

// 19
// Use every to check if all the countries contain the word land

const checkLand = countries.every(country => {return country.match(/land/i); });

console.log(checkLand);


// 20
// Explain the difference between find and findIndex.
// find returns the value of array element  ==> in which the function passed to the array
// findIndex will return the index of array element ==> in which the function passed to the array


// 21
// Use find to find the first country containing only six letters in the countries array
const countryWithSixLetters = countries.find(country => {

    return country.length === 6;
})

console.log(countryWithSixLetters);

// 22
// Use findIndex to find the position of the first country containing only six letters in the countries array
const countryWithSixLetters2 = countries.findIndex(country => country.length === 6);

console.log(countryWithSixLetters2);

// 23
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
function checkPositionOfCountry (nation) {

    let actualPosition = countries.findIndex(country => country.includes(nation));
    return actualPosition + ' is the position';
}
console.log( checkPositionOfCountry('sdf'));

// 24
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.


// 25
// Declare a function called categorizeCountries which returns an array of countries 
// which have some common pattern(you find the countries array in this 
// repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries = function(array, pattern) {

    let searchQuery = new RegExp(pattern);

    let result = array.filter(country => country.match(searchQuery))

    return result;

}
console.log(categorizeCountries(countries, /ist/));
 

// xxxxx
// Use findIndex to find the position of the first country containing only six letters in the countries array

const getTheIndex = countries.findIndex(country => country.length === 6);

console.log(getTheIndex);


// 27
// Declare a getFirstTenCountries function and return an array of ten countries. 
// Use different functional programming to work on the countries.js array

const getXNoOfCountries = function (array, num){

    let xCountries = array.slice(0,num);
    return xCountries;

}
console.log(getXNoOfCountries(countries, 10));

// 28
// Declare a getLastTenCountries function which return the last ten countries 
// const getLastTenCountries = countries.filter(country => 
//     countries.indexOf(country) > countries.length - 11);

// console.log(getXNoOfCountries(countries));

function getLastTenCountries (){

    let lastTenCountries = countries.filter(country => 
        countries.indexOf(country) > countries.length - 11);

        return lastTenCountries;
}

console.log(getLastTenCountries());


// 29 
// Find out which letter is used many times as intial for a country name from the 
// conuntries array (eg. Finland, Fiji, France etc)
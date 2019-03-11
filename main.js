const itCompanies = [ 'Facebook', 'Google', 'Microsoft','Integrify', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//let itCompanies = [1,2,3];

//print the array using normal loop

for(let i = 0; i < itCompanies.length; i++){

    console.log(itCompanies[i]);
}

//reverse the array 

console.log(itCompanies.reverse());

for(i = itCompanies.length - 1; i >= 0; --i){

    console.log(itCompanies[i]);
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var total = numbers.reduce(function(total, number) {
    return total + number;
});

console.log(total);

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

const person = {

    name : 'Hari',
    age: 1500,
    address: {
        street: 'Pihkalankatu 5',
        postBox: 20110,
        city: 'Turku'
    },
    getInfo: function(){
        return `I am ${this.name} and I live in ${this.country}. I am ${this.age} years old.`;
    }

};

console.log(person.getInfo());
console.log(person.address.city);

person.job = 'student';

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


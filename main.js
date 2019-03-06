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

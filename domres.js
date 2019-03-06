
// const titles = document.getElementsByTagName('h1');


// console.log(titles);

// for (let i = 0; i < titles.length; i++){
//     console.log(titles[i]);
// }

// const firstTitle = document.getElementById('first-title');
// console.log(firstTitle);
// const secondTitle = document.getElementById('second-title');
// console.log(secondTitle);
// const thirdTitle = document.getElementById('third-title');
// console.log(thirdTitle);

// const titles = document.querySelectorAll('h1');
// console.log(titles);

// titles.forEach(title => console.log(title));

// const title = document.querySelector('h1');
// const firstTitle = document.querySelector('#first-title');

// console.log(firstTitle);

// titles.forEach((title,i) => {
//     if(i % 2 == 0){
//     title.style.color = 'green';
//     }
// });


//creating html element 

const title = document.createElement('h1');
console.log(title);

//set content to the element 
title.textContent = 'Title-one';
document.body.appendChild(title);

const createP = document.createElement('p');
createP.textContent = 'lorem20';

document.body.appendChild(createP);


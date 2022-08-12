// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }

// const name = diana;

// function nondestructive(food){
//     const employee = derrick;
// }

let age = 20

if (age >=40){
    console.log ('you are a mubaba')

}else if (age <=40){
    console.log ('you are a youth')

}else{
    console.log('midlife crisis')

}

const gifts = ["teddy bear", "drone", "doll", "Bolly"];

function wrapGifts(gifts) {
  for (let i = 2; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {

    // 1) Create a new, empty array to hold the messages.
   
    // So, this should be done within the function. We want to be
    // able to update this locally-scoped array with the information
    // we get from each name in the array, combined with the event
    const messages = [];
   
     for (let i = 0; i < names.length; i++) {
   
       // 2) using string interpolation
   
       // What's great is that you've already discovered template strings
       // String concatenation has its uses but this far better.
       const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
   
       // So, instead of logging the message to the console
       // we're going to push it to the messages array
       messages.push(message);
     }
   
     // 3) After the loop finishes and all of the messages
     // have been added to the new array, return the new array.
     return messages;
   
   }
   
   console.log(writeCards(['Bob', 'Sue'], 'wedding'));

function countDown(counter){
   
    while (counter>=0){
        console.log(counter--);

}


}

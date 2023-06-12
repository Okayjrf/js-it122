'use strict'

console.log("hi!")

let form = document.querySelector('form') 

function handleSubmit(event) {
  event.preventDefault();

  let faren = document.getElementById('faren')

  let temp = +event.target.temp.value;
  console.log(temp);
  if(!temp){

  faren.textContent = "please enter a number"

  }else{
    
    let degFahren = 9 / 5 * temp + 32
    
    faren.textContent = `You entered ${temp} C! After the simple calculations that comes to ${degFahren} F. Wow!`
  }
  
}
form.addEventListener('submit' , handleSubmit);
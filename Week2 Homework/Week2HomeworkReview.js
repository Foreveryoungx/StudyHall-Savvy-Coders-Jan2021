let pizzaPlace = "Trey's Pizza";
let numberOfToppings = 15;

console.log(pizzaPlace);
console.log(numberOfToppings);

console.log(`This new place called ${pizzaPlace} has ${numberOfToppings} available today.`);

if (numberOfToppings < 10) {
    console.log("Quality, not quantity.")
  } else {
    console.log("A whole lot of pizza.")
  }

  //Bonus

  for (let i = 1; i <= numberOfToppings; i++){
      if(i % 2 === 0) {
          console.log(i);
      }
  }
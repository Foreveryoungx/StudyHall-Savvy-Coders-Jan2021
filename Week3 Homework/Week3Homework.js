const pizzaToppings = ["Pepperoni", "ham", "Beats", "Bacon", "tomatoes"];

function greetCustomer() {
    let greeting = `Welcome to Trey's Pizza Palace, our toppings are:`;

    for (let topping of pizzaToppings){
        greeting += `${topping}, `;
    }
    console.log(greeting);
}

greetCustomer();

function getPizzaOrder(size, crust, ...toppings){
    let order =`One ${size} ${crust} crust pizza with `;
    for (let topping of pizzaToppings) {
        order += `${topping}, `;
    }
    console.log(`${order}. coming up!`);
    return [size, crust, toppings];
}
let customerOrder = getPizzaOrder("Large","Cheesy","Pepperoni","Bacon","tomatoes");

function preparePizza([orderSize, orderCrust, orderToppings]){
    console.log("...Cooking Pizza....");
    return {
        size: orderSize,
        crust: orderCrust,
        toppings: orderToppings
    };
}

let cookedPizza = preparePizza(customerOrder);

function serverPizza(pizza){
    let orderReady = `Order up! here's your ${pizza.size} ${pizza.crust} crust pizza with`;
    for (let topping of pizzaToppings) {
        orderReady += `${topping}, `;
    }
    console.log(`${orderReady}. Enjoy!`);
    return pizza;
}
serverPizza(cookedPizza);

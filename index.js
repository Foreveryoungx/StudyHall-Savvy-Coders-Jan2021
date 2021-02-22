
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1
// while (i <= 10) {
//   console.log(i);
//   i++
// }
var house = 0
function bankAccount (payment, change) {
 if (payment !== 100 ){
   console.log("transaction successful");
 } else {
prompt("invalid transaction please add more money");
 }

}

// Selecting The header and changing the header after clicking on it
let element = document.getElementById("header");

element.addEventListener("click", ChangeHeader)

function ChangeHeader(){
  element.innerHTML = "New Heading";
}
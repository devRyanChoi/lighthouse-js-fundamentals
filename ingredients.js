const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let factor = 0; 
while ( factor < ingredients.length) {
  console.log(ingredients[factor]);
  ++factor ;
}


// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i])
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:
const reversed = ingredients.reverse();
console.log("Reversed : " , reversed)
for (rev of reversed){
    console.log(rev)
}

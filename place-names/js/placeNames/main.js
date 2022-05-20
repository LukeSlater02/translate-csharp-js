// Put your code here

const names = [
   "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

console.log("All Pace Names");

for (const name of names) {
  console.log(name);
}

console.log()

let theNames = names.filter(ele => {
  if (ele.startsWith("The")){
    return ele
  }
})

console.log("'The' Place Names");
theNames.forEach(ele => console.log(ele))
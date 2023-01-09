const myInfo = require("./information");
const cowsay = require("cowsay");

console.log(
  `Hi, my name is ${myInfo.name} and I'm in campus ${myInfo.campus} for study`
);

console.log(
  cowsay.think({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);

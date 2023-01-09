const myInfo = require("./information");
const cowsay = require("cowsay");

console.log(
  cowsay.think({
    text: `Hi, my name is ${myInfo.name} and I'm in campus ${myInfo.campus} for study`,
    e: "oO",
    T: "U ",
  })
);

import {animateValue} from "./animateValue.js"
import {randomInteger} from "./randomInteger.js"

setInterval(() => {
  var shares = document.getElementById("shares").innerHTML
  shares = +shares.slice(0, -1)
  var range = Math.floor(shares*(randomInteger(5,10)/100))
  if (shares < 2000) animateValue("shares", range, 500)
}, randomInteger(3000,6000))

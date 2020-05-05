import { animateValue } from "./animateValue.js"
import { randomInteger } from "./randomInteger.js"

var tweet = document.getElementById("tweet")
tweet.addEventListener("click", () => {
  var shares = document.getElementById("shares").innerHTML
  shares = +shares.slice(0, -1)
  var range = Math.floor(shares * (randomInteger(5, 10) / 100)) * -1
  if (shares > 0) animateValue("shares", range, 500)
})

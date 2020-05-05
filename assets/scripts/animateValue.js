function animateValue(id, range, duration) {
  var current = document.getElementById(id).innerHTML
  current = +current.slice(0, -1)
  var start = current
  var increment = range > 0 ? 1 : -1
  var stepTime = Math.abs(Math.floor(duration / range))
  var obj = document.getElementById(id)
  if (range > 0) {
    obj.style.color = "green"
  } else {
    obj.style.color = "red"
  }
  var timer = setInterval(function () {
    current += increment
    obj.innerHTML = current + "$"
    if (current == start + range) {
      clearInterval(timer)
    }
  }, stepTime)
}

export { animateValue }

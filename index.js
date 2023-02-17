let a = document.querySelector(".a")
let b = document.querySelector(".b")
let sum = document.querySelector(".sum")
document.querySelector(".add").addEventListener("click", () => {
  sum.innerHTML = parseInt(a.value)+parseInt(b.value)
})
document.querySelector(".hyp").addEventListener("click", () => {
  sum.innerHTML = parseInt(a.value)-parseInt(b.value)
})
document.querySelector(".multi").addEventListener("click", () => {
  sum.innerHTML = parseInt(a.value)*parseInt(b.value)
})
document.querySelector(".dev").addEventListener("click", () => {
  sum.innerHTML = parseInt(a.value)/parseInt(b.value)
})
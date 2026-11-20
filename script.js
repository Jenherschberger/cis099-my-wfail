const button1 = document.getElementById("buttonYes")
const button2 = document.getElementById("buttonNo")

button1.addEventListener ("click", function() {
    alert("Your answer was Yes!")
})

button2.addEventListener ("click", function() {
    alert("Your answer was No. Are you sure this is your final answer?")
})

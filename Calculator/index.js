let displayInput = document.getElementById("displayInput")
let newInput = document.getElementById("newInput")

let btn = document.getElementsByClassName("btn")

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", backend)
}

let num1 = ""
let operation = ""
let num2 = ""

let interOp = ""
let answer = ""

function backend(e) {
  let val = e.target.value

  if (val == "C") {
    displayInput.value = ""
    num1 = ""
    operation = ""
    num2 = ""
    val = ""
  }
  if (val == "+/-") {
    if (Math.sign(num1) == 1) {
      num1 = `-${num1}`
      displayInput.value = num1
      val = ""
    }
    else {
      num1 = num1.replace('-', '')
      displayInput.value = num1
      val = ""
    }
  }
  if (val == "÷") {
    operation = val
    val = ""
    interOp = "/"
  }
  if (val == "×") {
    operation = val
    val = ""
    interOp = "*"
  }
  if (val == "-") {
    operation = val
    val = ""
    interOp = "-"
  }
  if (val == "+") {
    operation = val
    val = ""
    interOp = "+"
  }
  if (val == "=") {
    if (interOp == "/") {
      answer = Number(num1) / Number(num2)
      newInput.value = answer
      newInput.style.color = "green"
      
      console.log(answer);
      
      val = ""
      num1 = ""
      num2 = ""
      operation = ""
      interOp = ""
      answer = ""
    }
    if (interOp == "*") {
      answer = Number(num1) * Number(num2)
      newInput.value = answer
      newInput.style.color = "green"
      
      console.log(answer);
      
      val = ""
      num1 = ""
      num2 = ""
      operation = ""
      interOp = ""
      answer = ""
    }
    if (interOp == "-") {
      answer = Number(num1) - Number(num2)
      newInput.value = answer
      newInput.style.color = "green"
      
      console.log(answer);
      
      val = ""
      num1 = ""
      num2 = ""
      operation = ""
      interOp = ""
      answer = ""
    }
    if (interOp == "+") {
      answer = Number(num1) + Number(num2)
      newInput.value = answer
      newInput.style.color = "green"
      
      console.log(answer);
      
      val = ""
      num1 = ""
      num2 = ""
      operation = ""
      interOp = ""
      answer = ""
    }
  }
  if (operation != "") {
    num2 += val
    displayInput.value = num1 + operation + num2
  }
  else {
    num1 += val
    displayInput.value = num1
  }
}

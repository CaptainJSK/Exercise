let body = document.getElementById("body")
let cardBody = document.getElementById("cardBody")
let next = document.getElementById("next")
let img = document.getElementById("img")

const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://randomuser.me/api', true)

xhr.onload = x

xhr.send()

function x() {
  body.classList.remove("d-none")
  
  let data = JSON.parse(xhr.responseText)

  let name = `${data.results[0].name.first} ${data.results[0].name.last}`
  let age = data.results[0].dob.age
  let country = data.results[0].nat
  let email = data.results[0].email
  let cell = data.results[0].cell
  let image = data.results[0].picture.large

  populate()

  function populate() {

    let html =
      `<p class = "card-title" >
      Name: ${name} <br>
      Age: ${age} <br>
      Country: ${country} <br>
      <hr>
      Email : ${email} <br>
      Cell : ${cell}
      </p>`

    cardBody.innerHTML = html
    img.setAttribute("src", `${image}`)
  }
}

next.addEventListener("click", () => {
  location.reload()
})

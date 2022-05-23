let timeDiv = document.getElementById("timeDiv")
let h = document.getElementById("h")
let m = document.getElementById("m")

let c = new Date()
let ch = c.getHours()
let cm = c.getMinutes()

h.innerHTML = `${ch} : `
m.innerHTML = `${cm}`

updateTime()

function updateTime() {
  setInterval(() => {
    c = new Date()
    ch = c.getHours()
    cm = c.getMinutes()

    h.innerHTML = `${ch} : `
    m.innerHTML = `${cm}`
  }, 1000)
}

function getElementFromString(string) {
  let div = document.createElement('div');
  div.innerHTML = string;
  return div.firstElementChild;
}

// Initialize no of parameters
let addedParamCount = 0

let reqTextarea = document.getElementById("reqTextarea")

let optJSON = document.getElementById("optJSON")
let optCusParam = document.getElementById("optCusParam")
let jsonReqDiv = document.getElementById("jsonReqDiv")
let cusParamDiv = document.getElementById("cusParamDiv")

let submitBtn = document.getElementById("submitBtn")

//Request Type Radio Div && JsonReq/CusParam Div
optJSON.addEventListener("click", () => {
  cusParamDiv.classList.add("d-none")
  jsonReqDiv.classList.remove("d-none")
})

optCusParam.addEventListener("click", () => {
  jsonReqDiv.classList.add("d-none")
  cusParamDiv.classList.remove("d-none")
})

//Making cusParam Div work
let paramKey = document.getElementById("key1")
let paramValue = document.getElementById("value1")
let addParamBtn = document.getElementById("addParamBtn")

let keyValueDiv = document.getElementById("keyValueDiv")

//addParamBtn
addParamBtn.addEventListener("click", addParam)

function addParam() {
  let html =
    `
      <div class="input-group mt-2">
        <input id="key${addedParamCount + 2}" class="rounded form-control me-1" type="text" style="background-color: black; border: limegreen solid; color: limegreen" placeholder="key">
        <input id="value${addedParamCount + 2}" class="rounded form-control me-1" type="text" style="background-color: black; border: limegreen solid; color: limegreen" placeholder="value">
        <button id="="${addedParamCount + 2}" class="deleteParam btn" type="button" style="background-color: black; border: red solid; color: red; padding: 0px 15px 0px 14.5px">Del</button>
      </div>
    `

  let paramElement = getElementFromString(html);
  keyValueDiv.appendChild(paramElement);
  // Add an event listener to remove the parameter on clicking - button
  let deleteParam = document.getElementsByClassName('deleteParam');
  for (item of deleteParam) {
    item.addEventListener('click', (e) => {
      let con = confirm("Do you want to Delete this Parameter")

      if (con) {
        e.target.parentElement.remove();
      }
    })
  }
  addedParamCount++;
}

let url = document.getElementById("url")
let GET = document.getElementById("GET")
let POST = document.getElementById("POST")

let requestType = ""
let contentType = ""

let responsePrism = document.getElementById("responsePrism")

let contentTypeDiv = document.getElementById("contentTypeDiv")

GET.addEventListener("click", () => {
  requestType = document.querySelector("input[name='requestType']:checked").value

  if (requestType == "GET") {
    contentTypeDiv.classList.add("d-none")
    reqTextarea.classList.add("d-none")
  }
})

POST.addEventListener("click", () => {
  requestType = document.querySelector("input[name='requestType']:checked").value

  if (requestType == "POST") {
    contentTypeDiv.classList.remove("d-none")
    reqTextarea.classList.remove("d-none")
  }
})
let dots = ""
let myInter = ""
let pElem = document.getElementById("pElem")

function displayInterval() {
  myInter = setInterval(() => {
    dots += "."
    if (dots.length >= 11) {
      dots = "."
    }
    pElem.innerHTML = "Fetching Data" + dots
  }, 500)
}

submitBtn.addEventListener("click", () => {
  displayInterval()
  responsePrism.innerHTML = ""
  
  if (url.value == "") {
    clearInterval(myInter)
    pElem.innerHTML = "Invalid URL"
  } else {
    requestType = document.querySelector("input[name='requestType']:checked").value
    if (requestType == "GET") {
      fetch(url.value, {
          method: 'GET',
        })
        .then(response => response.text())
        .then((text) => {

          clearInterval(myInter)
          pElem.innerHTML = ""
          responsePrism.innerHTML = text
          Prism.highlightAll()
        })

    } else {
      let data = ""

      contentType = document.querySelector("input[name='contentType']:checked").value

      if (contentType == "cusParam") {
        data = {}

        for (var i = 0; i < addedParamCount + 1; i++) {
          if (document.getElementById("key" + (i + 1)) != undefined) {
            let key = document.getElementById("key" + (i + 1)).value
            let value = document.getElementById("value" + (i + 1)).value

            data[key] = value
          }
        }
      } else {
        data = jsonReq.value
      }

      fetch(url.value, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.text())
        .then(text => {

          clearInterval(myInter)
          pElem.innerHTML = ""
          responsePrism.innerHTML = text
          Prism.highlightAll()
        })
    }
  }
})

let cusAlert = document.getElementById("alert")

function success(){
  let html = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

<div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
    Your Request has been successfully submitted. Thank You :)
  </div>
</div>`

  //fadeout(cusAlert)
  fadeout(cusAlert)
  
  return cusAlert.innerHTML = html
}

function failure() {
  let html = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

<div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
    Please Correct the Errors in The form and try again. Sorry :(
  </div>
</div>`

  //fadeout(cusAlert)
  fadeout(cusAlert)

  return cusAlert.innerHTML = html
}

function fadeout(a){
  setTimeout(() => {
    a.innerHTML = ""
    document.location.reload()
    }, "3000")
}

let name = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let address = document.getElementById("address")

let car = document.getElementById("car")
let details = document.getElementById("details")

let nameValid = false
let emailValid = false
let phoneValid = false
let addressValid = false
let carValid = false
let detailsValid = false
 
   name.addEventListener("blur", () => {
     let regex = /^([a-zA-Z]){3,10}$/
     let str = name.value
  
     let nameHead = document.getElementById("nameHead")
     let wrong = document.getElementById("wrongName")
  
     if (regex.test(str)) {
       nameHead.style.color = "green"
       name.style.border = "solid green"
       name.style.color = "green"
  
       wrong.classList.add("d-none")
  
       nameValid += true
  
     } else {
       nameHead.style.color = "red"
       name.style.border = "solid red"
       name.style.color = "red"
  
       wrong.classList.remove("d-none")
  
       nameValid += false
     }
   })
  
  email.addEventListener("blur", () =>{
    let regex = /^([a-zA-Z])+([a-zA-Z0-9\.]+)@([a-z]){0,5}mail\.([a-z]){1,8}$/
    let str = email.value
    
    let emailHead = document.getElementById("emailHead")
    let wrong = document.getElementById("wrongEmail")
    
    if (regex.test(str)) {
      emailHead.style.color = "green"
      email.style.border = "solid green"
      email.style.color = "green"
    
      wrong.classList.add("d-none")
      
      emailValid += true
    } else {
      emailHead.style.color = "red"
      email.style.border = "solid red"
      email.style.color = "red"
    
      wrong.classList.remove("d-none")
    
      emailValid = false
    }
  })

  phone.addEventListener("blur", () =>{
    let regex = /^(\+91)?([0-9]){10}$/
    let str = phone.value
    
    let phoneHead = document.getElementById("phoneHead")
    let wrong = document.getElementById("wrongPhone")
    
    if (regex.test(str)) {
      phoneHead.style.color = "green"
      phone.style.border = "solid green"
      phone.style.color = "green"
    
      wrong.classList.add("d-none")
      
      phoneValid += true
    } else {
      phoneHead.style.color = "red"
      phone.style.border = "solid red"
      phone.style.color = "red"
    
      wrong.classList.remove("d-none")
    
      phoneValid += false
    }
  })

  address.addEventListener("blur", () =>{
    let addContent = address.value
    let wrong = document.getElementById("wrongAddress")
    
    if (addContent.length > 10) {
      
      addressHead.style.color = "green"
      address.style.border = "solid green"
      address.style.color = "green"
      
      wrong.classList.add("d-none")
      
      addressValid += true
      }
      else {
        addressHead.style.color = "red"
        address.style.border = "solid red"
        address.style.color = "red"
      
        wrong.classList.remove("d-none")
        
        addressValid += false
    }
  })
  
  car.addEventListener("blur", () =>{
    let str = car.value
    
    let carHead = document.getElementById("carHead")
    let wrong = document.getElementById("wrongCar")
    
    if (car.value != null) {
      carHead.style.color = "green"
      car.style.border = "solid green"
      car.style.color = "green"
    
      wrong.classList.add("d-none")
      
      carValid += true
    } else {
      carHead.style.color = "red"
      car.style.border = "solid red"
      car.style.color = "red"
    
      wrong.classList.remove("d-none")
    
      carValid += false
    }
  })

  details.addEventListener("blur", () => {
        let addContent = details.value
        let wrong = document.getElementById("wrongDetails")
  
        if (addContent.length > 10) {
  
          detailsHead.style.color = "green"
          details.style.border = "solid green"
          details.style.color = "green"
  
          wrong.classList.add("d-none")
          
          detailsValid += true
        }
        else {
          detailsHead.style.color = "red"
          details.style.border = "solid red"
          details.style.color = "red"
  
          wrong.classList.remove("d-none")
          
          detailsValid += false
        }
  })
  
let submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click" , ()=>{
  
  validate()
  
  if (validate() == true) {
    success()
    fadeout(name)
    
    nameValid += false
    emailValid += false
    phoneValid += false
    addressValid += false
    carValid += false
    detailsValid += false
    
  } else {
    failure()
    fadeout(name)
    
    if (nameValid == false) {
       document.getElementById("nameHead").style.color = "red"
       name.style.border = "solid red"
       name.style.color = "red"
  
       document.getElementById("wrongName").classList.remove("d-none")
       
    } if (emailValid == false) {
      document.getElementById("emailHead").style.color = "red"
      email.style.border = "solid red"
      email.style.color = "red"
      
      document.getElementById("wrongEmail").classList.remove("d-none")
      
    } if (phoneValid == false) {
      document.getElementById("phoneHead").style.color = "red"
      phone.style.border = "solid red"
      phone.style.color = "red"
    
      document.getElementById("wrongPhone").classList.remove("d-none")
      
    } if (addressValid == false) {
      document.getElementById("addressHead").style.color = "red"
      address.style.border = "solid red"
      address.style.color = "red"
    
      document.getElementById("wrongAddress").classList.remove("d-none")
      
    } if (carValid == false) {
      document.getElementById("carHead").style.color = "red"
      car.style.border = "solid red"
      car.style.color = "red"
    
      document.getElementById("wrongCar").classList.remove("d-none")
      
    } if (detailsValid == false) {
      document.getElementById("detailsHead").style.color = "red"
      details.style.border = "solid red"
      details.style.color = "red"
    
      document.getElementById("wrongDetails").classList.remove("d-none")
      
    } else {}
  }
})

function validate(){
  
  if (nameValid && emailValid && phoneValid && addressValid && carValid && detailsValid == true) {
    return true
  } else {
    return false
  }
}

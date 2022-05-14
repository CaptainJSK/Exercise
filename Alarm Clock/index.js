let audio = new Audio("r1.mp3")

let closeOffcanvas = document.getElementById("closeOffcanvas")

let save = document.getElementById("save")
let time = document.getElementById("time")

let ms = ""
let s = document.getElementById("seconds")
let m = document.getElementById("minutes")
let h = document.getElementById("hours")

let ringInterval = ""

let title = document.getElementById("title")
let note = document.getElementById("note")

let errorDiv = document.getElementById("errorDiv")

let timersDiv = document.getElementById("timersDiv")

let validTime = ""
let validTitle = ""

let remainingTime = ""

let liveH = document.getElementById("liveHours")
let liveM = document.getElementById("liveMinutes")
let liveS = document.getElementById("liveSeconds")
let liveTitle = document.getElementById("liveTitle")

function ring() {
  audio.play()
}

save.addEventListener("click", () => {
  getMs()
  newTimerForm()

  if (validTime && validTitle) {
    setTimer()
    displayTimer()

    closeOffcanvas.click()

    h.value = ""
    m.value = ""
    s.value = ""

    title.value = ""
  }
})

function getMs() {

  let seconds = s.value
  let minutes = m.value
  let hours = h.value

  ms = (seconds * 1000) + (minutes * 60000) + (hours * 3600000)
}

function setTimer() {
  setTimeout(function() {
    ringInterval = setInterval(interval, 1000)
  }, ms)
}

function interval() {
  ring()
  setTimeout(function() {
    clearInterval(ringInterval)
  }, 10000)
}

function newTimerForm() {

  vTime()
  vTitle()

  function vTime() {
    if (s.value != "") {
      errorDiv.classList.add("d-none")
      return validTime = true
    }
    else {
      errorDiv.classList.remove("d-none")
      return validTime = false
    }
  }

  function vTitle() {
    if (title.value != "") {
      errorDiv.classList.add("d-none")
      return validTitle = true
    } else {
      errorDiv.classList.remove("d-none")
      return validTitle = false
    }
  }
}

function displayTimer() {
  let seconds = s.value
  let minutes = m.value
  let hours = h.value

  let second = Number(seconds)
  let minute = Number(minutes)
  let hour = Number(hours)

  liveH.innerHTML = hour + "h"
  liveM.innerHTML = minute + "m"
  liveS.innerHTML = second + "s"
  liveTitle.innerHTML = title.value

  x()

  function x() {
    let interval1 = setInterval(function() {
      function a() {
        second += -1
        liveS.innerHTML = second + "s"
        
        if (second == 0) {
          return 0
        }
      }

      function b() {
        minute += -1
        liveM.innerHTML = minute + "m"
        second = 60
        if (minute == 0) {
          return 0
        }
      }

      function c() {
        hour += -1
        liveH.innerHTML = hour + "h"
        minute = 60
      }
      
    a()
    if (second == 0){
      b()
    } if (minute == 0) {
      c()
    } if (minute && hour == 0) {
      console.log("hy")
      clearInterval(interval1)
    } else {
      
    }
    
    }, 1)
  }
}

/*if (hour && minute && second == 0) {
  console.log("hyy")
} else {
  second = 60
  if (second == 0) {
        minute += -1
        liveM.innerHTML = minute + "m"
        
      } if (minute == 0) {
        hour += -1
        liveH.innerHTML = hour + "h"
        minute = 60
      }
}*/

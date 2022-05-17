let date = document.getElementById("date")
let d = document.getElementById("d")
let mo = document.getElementById("mo")
let y = document.getElementById("y")

let cd = new Date()

let cdD = cd.getDate()
let cdNMo = cd.getMonth()

let cdMo = ""

if (cdNMo == 0) {
  cdMo = "January"
}
if (cdNMo == 1) {
  cdMo = "February"
}
if (cdNMo == 2) {
  cdMo = "March"
}
if (cdNMo == 3) {
  cdMo = "April"
}
if (cdNMo == 4) {
  cdMo = "May"
}
if (cdNMo == 5) {
  cdMo = "June"
}
if (cdNMo == 6) {
  cdMo = "July"
}
if (cdNMo == 7) {
  cdMo = "August"
}
if (cdNMo == 8) {
  cdMo = "September"
}
if (cdNMo == 9) {
  cdMo = "October"
}
if (cdNMo == 10) {
  cdMo = "November"
}
if (cdNMo == 11) {
  cdMo = "December"
}

let cdY = cd.getFullYear()

d.innerHTML = `${cdD} `
mo.innerHTML = `${cdMo} `
y.innerHTML = `${cdY}`

updateDate()

function updateDate() {

  setInterval(() => {
    let cd = new Date()

    let cdD = cd.getDate()
    let cdNMo = cd.getMonth()

    let cdMo = ""

    if (cdNMo == 0) {
      cdMo = "January"
    }
    if (cdNMo == 1) {
      cdMo = "February"
    }
    if (cdNMo == 2) {
      cdMo = "March"
    }
    if (cdNMo == 3) {
      cdMo = "April"
    }
    if (cdNMo == 4) {
      cdMo = "May"
    }
    if (cdNMo == 5) {
      cdMo = "June"
    }
    if (cdNMo == 6) {
      cdMo = "July"
    }
    if (cdNMo == 7) {
      cdMo = "August"
    }
    if (cdNMo == 8) {
      cdMo = "September"
    }
    if (cdNMo == 9) {
      cdMo = "October"
    }
    if (cdNMo == 10) {
      cdMo = "November"
    }
    if (cdNMo == 11) {
      cdMo = "December"
    }

    let cdY = cd.getFullYear()

    d.innerHTML = `${cdD} `
    mo.innerHTML = `${cdMo} `
    y.innerHTML = `${cdY}`
  }, 1000)
}

let time = document.getElementById("time")
let h = document.getElementById("h")
let m = document.getElementById("m")
let s = document.getElementById("s")

let ct = new Date()

let ctH = ct.getHours()
let ctM = ct.getMinutes()
let ctS = ct.getSeconds()

h.innerHTML = `${ctH} : `
m.innerHTML = `${ctM} : `
s.innerHTML = `${ctS}`

updateTime()

function updateTime() {

  setInterval(() => {
    ct = new Date()

    ctH = ct.getHours()
    ctM = ct.getMinutes()
    ctS = ct.getSeconds()

    h.innerHTML = `${ctH} : `
    m.innerHTML = `${ctM} : `
    s.innerHTML = `${ctS}`
  }, 1000)
}
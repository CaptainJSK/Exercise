const apiKey = `1af73b54ca034417820a71a20174a9cc`
let source = `in`

let popNews = document.getElementById("popNews")

const xhr = new XMLHttpRequest()

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`, true)

xhr.onload = function() {

  let head = document.getElementById("head")

  if (source == "in") {

    head.innerHTML = `News from <b>India</b>`
  }

  if (this.status == 200) {

    let json = JSON.parse(this.response)
    let articles = json['articles']
    let html = ""
    articles.forEach(function(element, index) {

      html += `<div class="accordion my-5" id="accordion${index}">
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}"><h5 class="my-2 mx-2">${element.title}</h5><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}"><img src="${element.urlToImage}" style="width: 600px ; height: 400px ;"></img></button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordion${index}">
                  <div class="accordion-body">${element.content}. <a href=${element.url}>Read more...</a>
                  </div>
                </div>
              </div>
              `
    })

    popNews.innerHTML = html
  } else {

    console.log("Error")
  }
}

xhr.send()

const xhr2 = new XMLHttpRequest()
let search = document.getElementById("search")
let word = document.getElementById("word")

search.addEventListener('click', function() {

  xhr2.open('GET', `https://newsapi.org/v2/everything?q=${word.value}&apiKey=${apiKey}` , true)

  xhr2.onload = function() {
    
    popNews.innerHTML = null
    head.innerHTML = `News Resslts for <b>${word.value}</b>`

    if (this.status == 200) {

    let json = JSON.parse(this.response)
    let articles = json['articles']
    let html = ""
    
    articles.forEach(function(element, index) {
    
      html += `<div class="accordion my-5" id="accordion${index}">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}"><h5>${element.title}</h5><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}"><img src="${element.urlToImage}" style="width: 600px ; height: 400px ;"></img></button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordion${index}">
                      <div class="accordion-body">${element.content}. <a href=${element.url}>Read more...</a>
                      </div>
                    </div>
                  </div>
                  `
    })
    
    popNews.innerHTML = html
    
    } else {

      popNews.innerHTML = null
      head.innerHTML = `Error!!<br/>STATUS: ${this.status}`
    }
  }

  xhr2.send()
})

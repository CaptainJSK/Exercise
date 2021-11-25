console.log("hyy")

const myJson = `{
  "word": "exercise",
  "results": [
    {
      "definition": "systematic training by multiple repetitions",
      "partOfSpeech": "noun",
      "synonyms": [
        "drill",
        "practice",
        "practice session",
        "recitation"
      ],
      "typeOf": [
        "preparation",
        "grooming",
        "training"
      ],
      "hasTypes": [
        "military drill",
        "brushup",
        "dry run",
        "fire drill",
        "manual",
        "manual of arms",
        "rehearsal",
        "review",
        "scrimmage",
        "shadowboxing",
        "target practice"
      ]
    },
    {
      "definition": "learn by repetition",
      "partOfSpeech": "verb",
      "synonyms": [
        "drill",
        "practice",
        "practise"
      ],
      "typeOf": [
        "read",
        "learn",
        "take",
        "study"
      ]
    },
    {
      "definition": "the act of using",
      "partOfSpeech": "noun",
      "synonyms": [
        "employment",
        "usage",
        "use",
        "utilisation",
        "utilization"
      ],
      "typeOf": [
        "activity"
      ],
      "hasTypes": [
        "practical application",
        "exploitation",
        "application",
        "development",
        "misuse",
        "abuse",
        "practice",
        "play",
        "recycling"
      ]
    },
    {
      "definition": "the activity of exerting your muscles in various ways to keep fit",
      "partOfSpeech": "noun",
      "synonyms": [
        "exercising",
        "physical exercise",
        "physical exertion",
        "workout"
      ],
      "typeOf": [
        "effort",
        "sweat",
        "elbow grease",
        "exertion",
        "travail"
      ],
      "hasTypes": [
        "anaerobic exercise",
        "stomach exercise",
        "stretch",
        "stretching",
        "tummy crunch",
        "yoga",
        "neck exercise",
        "musclebuilding",
        "muscle building",
        "pubococcygeus exercises",
        "bodybuilding",
        "back exercise",
        "arm exercise",
        "set",
        "leg exercise",
        "kick up",
        "kegel exercises",
        "isotonic exercise",
        "isometrics",
        "isometric exercise",
        "gymnastic exercise",
        "exercise set",
        "cardiopulmonary exercise",
        "callisthenics",
        "calisthenics"
      ],
      "examples": [
        "the doctor recommended regular exercise"
      ]
    },
    {
      "definition": "do physical exercise",
      "partOfSpeech": "verb",
      "synonyms": [
        "work out"
      ],
      "entails": [
        "move"
      ],
      "hasTypes": [
        "press",
        "strengthen",
        "tumble",
        "tone up",
        "train",
        "tone",
        "limber up",
        "loosen up",
        "weightlift",
        "weight-lift",
        "warm up"
      ],
      "verbGroup": [
        "work",
        "work out"
      ],
      "derivation": [
        "exerciser",
        "exercising"
      ]
    },
    {
      "definition": "give a workout to",
      "partOfSpeech": "verb",
      "synonyms": [
        "work",
        "work out"
      ],
      "cause": [
        "work out"
      ],
      "typeOf": [
        "put to work",
        "work"
      ],
      "hasTypes": [
        "warm up"
      ],
      "verbGroup": [
        "work out"
      ],
      "derivation": [
        "exerciser"
      ],
      "examples": [
        "Some parents exercise their infants",
        "this puzzle will exercise your mind"
      ]
    },
    {
      "definition": "a task performed or problem solved in order to develop skill or understanding",
      "partOfSpeech": "noun",
      "synonyms": [
        "example"
      ],
      "typeOf": [
        "lesson"
      ]
    },
    {
      "definition": "carry out or practice; as of jobs and professions",
      "partOfSpeech": "verb",
      "synonyms": [
        "do",
        "practice",
        "practise"
      ],
      "entails": [
        "do work",
        "work"
      ],
      "hasTypes": [
        "shamanize",
        "shamanise"
      ]
    },
    {
      "definition": "put to use",
      "partOfSpeech": "verb",
      "synonyms": [
        "exert"
      ],
      "typeOf": [
        "utilize",
        "utilise",
        "apply",
        "use",
        "employ"
      ]
    },
    {
      "definition": "an action, often used negatively and without consequences",
      "partOfSpeech": "noun",
      "typeOf": [
        "action"
      ],
      "examples": [
        "an exercise in futility",
        "an exercise in cheap talk"
      ]
    },
    {
      "definition": "(usually plural) a ceremony that involves processions and speeches",
      "partOfSpeech": "noun",
      "usageOf": [
        "plural",
        "plural form"
      ],
      "typeOf": [
        "ceremonial",
        "observance",
        "ceremony",
        "ceremonial occasion"
      ],
      "hasTypes": [
        "graduation exercise",
        "commencement exercise",
        "commencement ceremony",
        "commencement",
        "graduation"
      ],
      "examples": [
        "academic exercises"
      ]
    }
  ],
  "syllables": {
    "count": 3,
    "list": [
      "ex",
      "er",
      "cise"
    ]
  },
  "pronunciation": {
    "all": "'ɛksər,saɪz"
  },
  "frequency": 4.26
}`

const parsedJson = JSON.parse(myJson)

let word = document.getElementById("word")
let type = document.getElementById("type")
let msgArea = document.getElementById("msgArea")

let btnSearch = document.getElementById("btnSearch")

btnSearch.addEventListener('click', () => {
  
  validate()
  
  if (validate() == true){
    filter()
  }
  word.value = ""
})

function validate() {

  let getWord = word.value
  let convertedWord = getWord.toLowerCase()

  if (convertedWord == 0) {
    
    msgArea.innerHTML = null
    msgArea.innerHTML = `<div class="alert alert-warning alert-dismissible fade show my-2 mx-2" role="alert">
        <div>
          <strong>Warning! </strong>Word Required to Search
          <button type="button" class="close alert-warning" data-dismiss="alert" aria-label="Close" style="border: lightgoldenrodyellow">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>`
  }
  else if (convertedWord !== "example") {
    
    msgArea.innerHTML = null
    msgArea.innerHTML = `<div class="alert alert-danger alert-dismissible fade show my-2 mx-2" role="alert">
            <div>
              <strong>Error! </strong>Word not Found<button type="button" class="close alert-danger" data-dismiss="alert" aria-label="Close" style="border: indianred">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>`
  }
  else {
    
    msgArea.innerHTML = null
    msgArea.innerHTML = `<div class="alert alert-success alert-dismissible fade show my-2 mx-2" role="alert">
                <div>
                  <strong>Success! </strong>Word found<button type="button" class="close alert-success" data-dismiss="alert" aria-label="Close" style="border: lightgreen">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>`
              
              return true
  }
}

function filter() {
  let getType = type.value
  
  if (getType == "all") {
    let pop = document.getElementById("populated")
    pop.innerHTML = null
    
    let obj = parsedJson['results']
    let html = ""
    
    obj.forEach(element => {
      html += `<li><b>Defination :</b> ${element['definition']}. <br/><b>Part of Speech :</b> ${element['partOfSpeech']}. <br/> <b>Synonyms :</b> ${element.synonyms}. <br/> <b>Has types :</b> ${element.hasTypes}. <br/> <b>Types of :</b> ${element.typeOf}.</li> <br/><br/>`
    })
    pop.innerHTML = html
  }
  else if (getType == "defination") {
    
    let pop = document.getElementById("populated")
    pop.innerHTML = null
    
    let obj = parsedJson['results']
    let html = ""
    
    obj.forEach(element => {
      html += `<li><b>Defination :</b> ${element['definition']}. <br/></li> <br/>`
    })
    pop.innerHTML = html
  }
  else if (getType == "antonyms") {
    
    let pop = document.getElementById("populated")
    pop.innerHTML = null
    
    pop.innerHTML = "<b>Synonyms not Found!</b>"
  }
  else {
    
    let pop = document.getElementById("populated")
    pop.innerHTML = null
    
    let obj = parsedJson['results']
    let html = ""
    
    obj.forEach(element => {
      html += `<li><b>Synonyms :</b> ${element['synonyms']}. <br/></li> <br/>`
    })
    pop.innerHTML = html
  }
} 
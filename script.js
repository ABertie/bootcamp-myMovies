var myMovies = [
    {
        title: "Iron Man",
        published: 2017,
        genre: ["Sci/fi", "Action"],
        actors: ["Robert Downey Jr.", "Jon Favreau", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges", "Leslie Bibb", "Paul Bettany"]
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        published: 2001,
        genre: ["Fantasy"],
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Alan Rickman", "Robbie Coltrane", "Tom Felton", "Richard Harris"]
    },
    {
        title: "Now You See Me",
        published: 2013,
        genre: ["Thriller", "Krimi"],
        actors: ["Jesse Eisenberg", "Mark Ruffalo", "Woody Harrelson", "Morgan Freeman", "Michael Caine", "Dave Franco", "Isla Lang Fisher"]
    },
    {
        title: "The Hunger Games",
        published: 2004,
        genre: ["Sci/fi", "Action"],
        actors: ["Woody Harrelson", "Lenny Kravitz", "Jennifer Lawrence", "Jackie Evancho", "Josh Hutcherson"]
    },
    {
        title: "Heart of Stone",
        published: 2023,
        genre: ["Mysterie"],
        actors: ["Alia Bhatt", "Gal Gadot", "Jamie Dornan", "Matthias Schweighöfer"]
    },
    {
        title: "Red Notice",
        published: 2021,
        genre: ["Action", "Komedie"],
        actors: ["Gal Gadot", "Ryan Reynolds", "The Rock", "Ritu Arya"]
    },
    {
        title: "Now You See Me 2",
        published: 2016,
        genre: ["Eventyr", "Krimi"],
        actors: ["Jesse Eisenberg", "Mark Ruffalo", "Woody Harrelson", "Morgan Freeman", "Michael Caine", "Dave Franco", "Isla Lang Fisher", "Daniel Radcliffe"]
    },
    {
        title: "Fantastic Beasts",
        published: 2016,
        genre: ["Fantasy", "Eventyr"],
        actors: ["Eddie Redmayne", "Katherine Waterston", "Dan Fogler", "Ezra Miller", "Colin Farrell", "Alison Sudol", "Johnny Depp"]
    },
    {
        title: "Jurassic Park",
        published: 1993,
        genre: ["Sci/fi", "Eventyr"],
        actors: ["Laura Dern", "Jeff Goldblum", "Sam Neill", "Ariana Richards", "Richard Attenborough", "BD Wong", "Joseph Mazzello"]
    },
    {
        title: "Avatar",
        published: 2009,
        genre: ["Sci/fi", "Action"],
        actors: ["Zoë Saldaña", "Sam Worthington", "Sigourney Weaver", "Michelle Rodriguez", "Stephen Lang", "Joel David Moore", "Laz Alonso"]
    }
]

const FORM = document.querySelector(".searchForm")

FORM.addEventListener("submit", submitHandler)

function submitHandler(event) {
    event.preventDefault()

    let searchValue = event.target.search.value

    const RESULTS = myMovies.filter(function(element) {
        return findInArray(element.title, searchValue)
        || compare(element.published, searchValue)
        || findInArray(element.genre.toString(), searchValue)
        || findInArray(element.actors.toString(), searchValue)
    })

    ShowResults(RESULTS)
}

function findInArray(haystack, needle) {
    return haystack.toLowerCase().includes(needle.toLowerCase())
}

const compare = (a, b) => a == b


function ShowResults(results) {
    const UL_RESULTS = document.querySelector(".searchResult")

    UL_RESULTS.innerHTML = ""
    
    results.forEach(item => {
        const LI = document.createElement("li")
        LI.classList = "searchResult__movieResult"
        LI.innerHTML = 
        `
        <h3 class="searchResult__movieTitle">${item.title}</h3>
        <span class="searchResult__moviePublished">${item.published}</span>
        <h4>Genre</h4>
        <ul class="searchResult__movieGenre"></ul>
        <h4>Actors</h4>
        <ul class="searchResult__movieActors"></ul>
        `
        
        const MOVIE_GENRE = LI.querySelector(".searchResult__movieGenre")
        const MOVIE_ACTORS = LI.querySelector(".searchResult__movieActors")
        
        item.genre.forEach(genre => {
            MOVIE_GENRE.innerHTML += `<li class="searchResult__movieGenre--${genre.toLowerCase().replace("/f", "F")}">${genre}</li>`
        })
        
        item.actors.forEach(actors => {MOVIE_ACTORS.innerHTML += `<li>${actors}</li>`})

        UL_RESULTS.appendChild(LI)
    });
    
}

var myMovies = [
    {
        title: "The Space Between Us",
        published: 2017,
        genre: ["Sci/fi", "Romantik"],
        actors: ["Asa Butterfield", "Britt Robertson", "Gary Oldman"]
    },
    {
        title: "Harry Potter and The philosopher's stone",
        published: 2001,
        genre: ["Fantasy"],
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
        title: "Harry Potter and The chamber of secrets",
        published: 2002,
        genre: ["Fantasy"],
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
        title: "Harry Potter and The prisoner of azkaban",
        published: 2004,
        genre: ["Fantasy"],
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
        title: "Harry Potter and The Goblet of Fire",
        published: 2005,
        genre: ["Fantasy"],
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
        title: "Harry Potter and The Order of The Phoenix",
        published: 2007,
        genre: ["Fantasy"],
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
        title: "Harry Potter and The Half-blood Prince",
        published: 2009,
        genre: ["Fantasy"],
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
        title: "Harry Potter and The Deathly Hallows: Part 1",
        published: 2010,
        genre: ["Fantasy"],
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
        title: "Harry Potter and The Deathly Hallows: Part 2",
        published: 2011,
        genre: ["Fantasy"],
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
        title: "Star Wars The Last Jedi",
        published: 2017,
        genre: ["Sci/fi", "Action"],
        actors: ["Daisy Ridley", "Mark Hamill", "John Boyega"]
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
        LI.innerHTML = 
        `
        <h3>${item.title}</h3>
        <span>${item.published}</span>
        <h4>Genre</h4>
        <ul class="movieGenre"></ul>
        <h4>Actors</h4>
        <ul class="movieActors"></ul>
        `
        
        const MOVIE_GENRE = LI.querySelector(".movieGenre")
        const MOVIE_ACTORS = LI.querySelector(".movieActors")
        
        item.genre.forEach(genre => { MOVIE_GENRE.innerHTML += `<li>${genre}</li>`})
        
        item.actors.forEach(actors => { MOVIE_ACTORS.innerHTML += `<li>${actors}</li>`})

        UL_RESULTS.appendChild(LI)
    });
    
    
    
}

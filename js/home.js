const _url_genres = "https://api.themoviedb.org/3/genre/movie/list?api_key=cb01e1433454fe031c347dd4e086f7fe&language=en-US";
const _url_now_playing = "https://api.themoviedb.org/3/movie/now_playing?api_key=cb01e1433454fe031c347dd4e086f7fe&language=en-US&page=1";
const _url_top_rated = "https://api.themoviedb.org/3/movie/top_rated?api_key=cb01e1433454fe031c347dd4e086f7fe&language=en-US";
const _url_most_popular = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cb01e1433454fe031c347dd4e086f7fe&language=en-US&page=1";
const _url_now_playing_search = 'https://api.themoviedb.org/3/search/movie?api_key=cb01e1433454fe031c347dd4e086f7fe&language=en-US&query=';
// https://api.themoviedb.org/3/search/movie?api_key=cb01e1433454fe031c347dd4e086f7fe&language=en-US&query=die
const _url_genres_search = 'https://api.themoviedb.org/3/movie/now_playing?api_key=cb01e1433454fe031c347dd4e086f7fe&language=en-US&page=1&with_genres=';
// const _url_genres_search ='https://api.themoviedb.org/3/movie/now_playing?api_key=cb01e1433454fe031c347dd4e086f7fe&language=en-US&page=1&with_genres=80';



const form = document.querySelector('#srchForm');
const searchMovie = document.querySelector('#srch');

const genresElement = document.querySelector('#genre');



// ########################-----Genres start here-----#############################
fetch(_url_genres)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        display(data);
    })
    .catch((error) => {
        console.log("Error in API call", error);
    });

display = (data) => {
    let arr = [];
    for (let r in data) {
        arr.push(data[r]);

    }

    arr[0].forEach(gen => {
        // console.log(gen);

        const tagPara = document.createElement('p');


        tagPara.classList.add('genres-link');

        tagPara.id = gen.id;
        tagPara.innerText = gen.name;

        tagPara.addEventListener('click', () => {
            getAllMovies(_url_genres_search + encodeURI(gen.id));
        });

        genresElement.append(tagPara);
    });

}
// ########################-----Genres end here-----#############################

// ########################-----Now Playing start here-----#############################

getAllMovies(_url_now_playing);

function getAllMovies(url) {

    fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((dataItem) => {
            //console.log(dataItem.results);
            displayCard(dataItem);
        })
        .catch((err) => {
            console.log("Error in API call", err);
        });

}

displayCard = (dataItem) => {
    let tab1 = "";


    for (let y of dataItem.results) {

        let priceR = Math.floor((Math.random() * 50) + 250);
        let minuteR = Math.floor((Math.random() * 15) + 120);
        tab1 += `
                <div class="col">
                    <a data-bs-toggle="modal" data-bs-target="#card${y.id}">
                        <div class="card h-100">

                        <div class="card-details">
                            <img src="https://image.tmdb.org/t/p/original/${y.poster_path}" class="card-img-top" alt="poster-image" />
                        </div>
                            
                                
                            <div class="card-body">
                                <h5 class="card-title">${y.original_title}</h5>
    
                                <div class="rating">
                                    <p class="capital-text">${y.original_language}</p>
                                    <p class="ms-auto">${y.vote_average}</p>
                                </div>
                            </div>
                        </div>
                    </a>
    
    
                    <div class="modal fade" id="card${y.id}" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-body cus-modal-body">
                                <span class="btn-x" data-bs-dismiss="modal"><i class="bi bi-x-lg"></i></span>
                                <div class="row">
                                    <div class="col">
                                        <img
                                            src="https://image.tmdb.org/t/p/original/${y.poster_path}"
                                            class="img-fluid" alt="poster-popup" />
                                    </div>
                                    <div class="col">
                                        <div>
                                            <h1>${y.original_title}</h1>
                                            <h3>⭐${y.vote_average}/10</h3>
                                            <p class="capital-text">${y.original_language}</p>
                                            <p>${minuteR} minutes <span style="font-weight: bold">•</span> Action</p>
                                            <p>${y.overview}</p>
                                            <p>₹ ${priceR}</p>
                                            
                                            <a class="btn btn-success" href="checkout.html?price=${priceR}&title=${y.original_title}">Book Tickets</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                </div>
    
               ` ;


    }


    document.getElementById("poster").innerHTML = tab1;


}

form.addEventListener('submit', (e) => {

    e.preventDefault();

    // console.log(searchMovie.value); 


    if (searchMovie.value) {
        getAllMovies(_url_now_playing_search + searchMovie.value);

    }



});

// ########################-----Now Playing end here-----#############################


// ########################----- 2. Most Popular start here-----#############################

fetch(_url_most_popular)
    .then((resp) => {
        return resp.json();
    })
    .then((dataItem) => {
        //console.log(dataItem.results);
        displayCardMost(dataItem);
    })
    .catch((err) => {
        console.log("Error in API call", err);
    });


displayCardMost = (dataItem) => {
    let tab2 = "";


    for (let y of dataItem.results) {

        let priceR = Math.floor((Math.random() * 50) + 250);
        let minuteR = Math.floor((Math.random() * 15) + 120);
        tab2 += `
                <div class="col">
                    <a data-bs-toggle="modal" data-bs-target="#card${y.id}">
                        <div class="card h-100">

                        <div class="card-details">
                            <img src="https://image.tmdb.org/t/p/original/${y.poster_path}" class="card-img-top" alt="poster-image" />
                        </div>
                            
                                
                            <div class="card-body">
                                <h5 class="card-title">${y.original_title}</h5>
    
                                <div class="rating">
                                    <p class="capital-text">${y.original_language}</p>
                                    <p class="ms-auto">${y.vote_average}</p>
                                </div>
                            </div>
                        </div>
                    </a>
    
    
                    <div class="modal fade" id="card${y.id}" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-body cus-modal-body">
                                <span class="btn-x" data-bs-dismiss="modal"><i class="bi bi-x-lg"></i></span>
                                <div class="row">
                                    <div class="col">
                                        <img
                                            src="https://image.tmdb.org/t/p/original/${y.poster_path}"
                                            class="img-fluid" alt="poster-popup" />
                                    </div>
                                    <div class="col">
                                        <div>
                                            <h1>${y.original_title}</h1>
                                            <h3>⭐${y.vote_average}/10</h3>
                                            <p class="capital-text">${y.original_language}</p>
                                            <p>${minuteR} minutes <span style="font-weight: bold">•</span> Action</p>
                                            <p>${y.overview}</p>
                                            <p>₹ ${priceR}</p>
                                            
                                            <a class="btn btn-success" href="checkout.html?price=${priceR}&title=${y.original_title}">Book Tickets</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                </div>
    
               ` ;


    }


    document.getElementById("mostPopular-poster").innerHTML = tab2;


}

// ########################-----Most Popular end here-----#############################

// ########################-----Top Rated start here-----#############################


fetch(_url_top_rated)
    .then((resp) => {
        return resp.json();
    })
    .then((dataItem) => {
        //console.log(dataItem.results);
        displayCardTopRated(dataItem);
    })
    .catch((err) => {
        console.log("Error in API call", err);
    });


displayCardTopRated = (dataItem) => {
    let tab3 = "";


    for (let y of dataItem.results) {

        let priceR = Math.floor((Math.random() * 50) + 250);
        let minuteR = Math.floor((Math.random() * 15) + 120);
        tab3 += `
                <div class="col">
                    <a data-bs-toggle="modal" data-bs-target="#card${y.id}">
                        <div class="card h-100">

                        <div class="card-details">
                            <img src="https://image.tmdb.org/t/p/original/${y.poster_path}" class="card-img-top" alt="poster-image" />
                        </div>
                            
                                
                            <div class="card-body">
                                <h5 class="card-title">${y.original_title}</h5>
    
                                <div class="rating">
                                    <p class="capital-text">${y.original_language}</p>
                                    <p class="ms-auto">${y.vote_average}</p>
                                </div>
                            </div>
                        </div>
                    </a>
    
    
                    <div class="modal fade" id="card${y.id}" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-body cus-modal-body">
                                <span class="btn-x" data-bs-dismiss="modal"><i class="bi bi-x-lg"></i></span>
                                <div class="row">
                                    <div class="col">
                                        <img
                                            src="https://image.tmdb.org/t/p/original/${y.poster_path}"
                                            class="img-fluid" alt="poster-popup" />
                                    </div>
                                    <div class="col">
                                        <div>
                                            <h1>${y.original_title}</h1>
                                            <h3>⭐${y.vote_average}/10</h3>
                                            <p class="capital-text">${y.original_language}</p>
                                            <p>${minuteR} minutes <span style="font-weight: bold">•</span> Action</p>
                                            <p>${y.overview}</p>
                                            <p>₹ ${priceR}</p>
                                            
                                            <a class="btn btn-success" href="checkout.html?price=${priceR}&title=${y.original_title}">Book Tickets</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                </div>
    
               ` ;


    }


    document.getElementById("topRated-poster").innerHTML = tab3;


}


// ########################-----Top Rated end here-----#############################
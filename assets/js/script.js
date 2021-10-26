const searchEl = document.getElementById('search-form');
const searchButton = document.getElementById('search-button');
const searches = JSON.parse(localStorage.getItem('searches'))||[];
const recentSearchEl = document.getElementById('search-history');


var apiKey = '3b5539f0c83f572df92c810c95a92c27';

//function to load the search history
// function loadSearches() {
//     var searches = JSON.parse(localStorage.getItem('search-history'))||[];
//     for (let i = 0; i < searches.length; i++) {
//         const recentSearch = searches[i];
//         var recentSearchLi = document.createElement('li');
//         recentSearchEl.setAttribute('class','recentSearches')
//     }


// }

// $(document.ready)(()=> {
    
// })

//create a fetch for weather API based on lat/long of search

// const getCurrentWeather = function (weather){
//     const apiUrl = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={3b5539f0c83f572df92c810c95a92c27};
//     fetch(apiUrl).then(function(response) {
//         if (response.ok) {
//             response.JSON().then(function(weather) {
//                 displayWeather(weather);
//                 //if statement 
//             })
//         }

//     })

// };

//push past searches to ul list with id "search-history"

//on click of search button
searchButton.addEventListener("click", function(){alert("button click")});
//find 

const searchEl = document.getElementById('search-form');
const searchButton = document.getElementById('search-button');
const searches = JSON.parse(localStorage.getItem('searches'))||[];
const recentSearchEl = document.getElementById('search-history');
const searchTerm = document.querySelector('#city-search-term')
const currentWeatherDiv = document.getElementById('current-weather')
//const cityName = 

let currentWeather = {
    "apiKey": "&units=imperial&appid=3b5539f0c83f572df92c810c95a92c27",
    //fetch api from open weather
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
            city + "&units=imperial&appid=3b5539f0c83f572df92c810c95a92c27")
        .then((response) => response.json())
        .then((data) => this.showWeather(data));
    },
    //function to display the weather
    showWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, feels_like } = data.main;
        const { speed } = data.wind;
        //get long & lat for second fetch to one call
        console.log(name,icon,description,temp,feels_like,speed);
        document.querySelector(".city").innerText = "Current Conditions in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn" + icon + "01n";

    }
};

//use moment to add date after city?
//city name, date, icon rep of conditions, temp., humidity, wind speed, uv index
//uv index = color of the uv index ie favorable, moderate, severe



//currentWeather.fetchWeather to log in console

//set units to F and save API Key as a constant
//const apiKey = "&units=imperial&appid=3b5539f0c83f572df92c810c95a92c27";

//const apiUrl = 'api.openweathermap.org/data/2.5/weather?q=' + 'searchTerm' + 'apikey'

//function to load the search history
// function loadSearches() {
//     var searches = JSON.parse(localStorage.getItem('search-history'))||[];
//     for (let i = 0; i < searches.length; i++) {
//         const recentSearch = searches[i];
//         var recentSearchLi = document.createElement('li');
//         recentSearchEl.setAttribute('class','recentSearches')
//     }

//push past searches to ul list with id "search-history"


//5 day should display the 5 day, date, icon rep, temp, wind speed, humid.,
// const getFiveDay = function (weather){
//     const fiveDayApiUrl = 'api.openweathermap.org/data/2.5/forecast?q=' + searchTerm + '&appid=3b5539f0c83f572df92c810c95a92c27';

//     fetch(fiveDayApiUrl).then(function(response) {
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
//searchButton.addEventListener("click", getApi);
//find 

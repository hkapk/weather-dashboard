//const searchEl = document.getElementsByClassName('search-form');
const searchButton = document.getElementById('search-button');
const searches = JSON.parse(localStorage.getItem('searches'))||[];
const recentSearchEl = document.getElementById('search-history');
//const city = document.querySelector('#city')
//const currentWeatherDiv = document.getElementById('current-weather')
//const cityName = 
//const previousSearch = document.getElementById('previous-search');

let currentWeather = {
    //"apiKey": "&units=imperial&appid=3b5539f0c83f572df92c810c95a92c27",
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
        const { icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { lon, lat } = data.coord; 
        //get long & lat for second fetch to one call
        console.log(name,temp,speed, humidity, lon,lat);
        document.querySelector(".city").innerText =  name + " " + moment().format('LL');
        document.querySelector(".temp").innerText ="Temp: " + temp + "° F";
        document.querySelector(".wind").innerText ="Wind: " + speed + " mph";
        document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
        

        //update dates in 5 day
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

        document.querySelector(".date1").innerText = moment().format('L')
        document.querySelector(".date2").innerText = moment().add(1, 'days').format('L');   
        document.querySelector(".date3").innerText = moment().add(2, 'days').format('L');  
        document.querySelector(".date4").innerText = moment().add(3, 'days').format('L');
        document.querySelector(".date5").innerText = moment().add(4, 'days').format('L');  
         //fetch one call with lat and lon from city search API

         

        //  fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +
        //   "&lon=" + lon + "&units=imperial&appid=3b5539f0c83f572df92c810c95a92c27")
        //     .then((response) => response.json())
        //     .then((data) => this.showWeather(data));

        //         const { uvi } = data.hourly.uvi;
        //         document.querySelector(".UV-index").innerText="UVI: " + uvi;

    },
     //function for search bar
     search: function () {
         this.fetchWeather(document.querySelector(".form-input").value);
            
        },
        

};

searchButton.addEventListener("click", function () {
    currentWeather.fetchWeather(document.querySelector(".form-input").value);
});




document.querySelector(".previous-search-1").addEventListener("click", function() {
    currentWeather.fetchWeather("Kansas City");
}
);

document.querySelector(".previous-search-2").addEventListener("click", function() {
    currentWeather.fetchWeather("Denver");
}
);

document.querySelector(".previous-search-3").addEventListener("click", function() {
    currentWeather.fetchWeather("Tokyo");
}
);

document.querySelector(".previous-search-4").addEventListener("click", function() {
    currentWeather.fetchWeather("Portland");
}
);


//previousSearch.addEventListener("click", console.log("button click"));

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

    
    // 11/09/2021




//push past searches to ul list with id "search-history"

//on click of search button

//find 
//update date

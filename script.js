// this is my personal api key => "a97bdd756f5d646242a96ca49a1b2482"

let weather = {
    "apiKey" : "a97bdd756f5d646242a96ca49a1b2482",
    fecthWeather : function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + 
            "&units=metric&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },

    displayWeather : function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const{speed} = data.wind;

        
        // attach in the card segment of the page
        document.querySelector(".city").innerText = "Weather in "+name;
        document.querySelector(".temp").innerText = temp+" °C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity : "+humidity+"%";
        document.querySelector(".wind").innerText = "Wind speed : "+speed+" kmph";
        document.querySelector(".show").style.visibility = "hidden";
        // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900?stars" + name + "')"
    },
    // function to get content of the search bar
    search : function () {
        cityName = document.querySelector(".search-bar").value;
        timeId = 0;
        this.fecthWeather(cityName);
    }
};
let cityName = "";
let searchButton = document.querySelector(".search button");
searchButton.addEventListener("click", () => {
    document.querySelector(".show").style.visibility = "visible";
    let timeId = setTimeout(function() {
        weather.search();
        document.querySelector(".search-bar").value = "";
    }, 1300)
    
    timeId = 0;
})

// enter key to search
let enterSearch = document.querySelector(".search-bar");
enterSearch.addEventListener("keydown", (e) => {
    if(e.key == 'Enter') {
        document.querySelector(".show").style.visibility = "visible";
        let timeId = setTimeout(function() {
            weather.search();
            document.querySelector(".search-bar").value = "";
        }, 1100)
    }
    timeId = 0;
})


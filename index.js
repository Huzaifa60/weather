const key = "1f16f54f3880b195cb724d633bb11442"; 
const input = document.getElementById("search_input");
const button = document.getElementById("btn");
const weatherIcon = document.querySelector(".weather_icon")

let inputData = "";

async function checkWeather (city) {

    inputData = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=${key}&units=metric`;
    
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
    if(data.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        
        document.querySelector(".city").innerHTML = response.name;
        document.querySelector(".temp").innerHTML = Math.round(response.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = response.main.humidity + "%";
        document.querySelector(".wind").innerHTML = response.wind.speed + " km/h";

        if(response.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png";
        }
        else if(response.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        }
        else if(response.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png";
        }
        else if(response.weather[0].main == "Drizzle"){
            weatherIcon.src = "drizzle.png";
        }
        else if(response.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}

button.addEventListener("click",(e)=>{
    e.preventDefault;
    checkWeather();
    
});
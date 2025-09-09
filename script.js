const city=document.querySelector('.city-input')

const button=document.querySelector('button')

let cityname=document.querySelector('.city')


let temp=document.querySelector('.temp')

let windSpeed=document.querySelector('.wind')

let humidity=document.querySelector('.humidity')


const apiKey="d3a4c0430be70061a32db71871e82aaa";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="




// console.log(cityName)

async function checkWeather(city) {
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`)

    var data= await response.json()
    console.log(data)

    if (data.cod=="404"){

        cityname.innerHTML="Enter valid city"

         windSpeed.innerHTML="No data found"

        humidity.innerHTML="No data found"
        
        temp.innerHTML="No data found"


    }else{
        cityname.innerHTML=data.name
        windSpeed.innerHTML=data.wind.speed + "km/h"

        humidity.innerHTML=data.main.humidity + "%"
        
        temp.innerHTML=data.main.temp + "°C"
    
    }

}


button.addEventListener('click',()=>{

    const citySearch=city.value;
    checkWeather(citySearch)


})

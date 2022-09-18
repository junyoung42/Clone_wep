
const API_KEY = "ce2d0b3fd2765d4eefaa34bb5aac993f";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url); 
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("날씨를 못찾아. ");

}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


//api는 다른 서버와의 프로토콜이다.
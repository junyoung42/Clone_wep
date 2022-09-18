const clock = document.querySelector("h2#clock");




function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
  
  clock.innerText = (`${hours}:${minutes}:${seconds}`);
}


getClock();
//interval 시간 간격을 주는 함수
setInterval(getClock, 1000);





//timeout 
// setTimeout(sayHello, 5000);
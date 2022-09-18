const images = ["0.jpeg", "1.jpeg","2.jpeg"];


const koreaImage = images[Math.floor(Math.random()*images.length)];


const bgImage = document.createElement("img");


bgImage.src = `img/${koreaImage}`;

console.log(bgImage);


document.body.appendChild(bgImage);
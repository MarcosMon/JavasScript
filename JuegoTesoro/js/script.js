const WIDTH = 400;
const HEIGH = 400;


let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};


let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let tocamientos = 0;

$map.addEventListener('click',function(e) {
    tocamientos++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`

    if (distance < 20){
        document.getElementById("map").src = "img/hentaiUno.png";
        $distance.innerHTML = `<h1>Me has tocado ${tocamientos} veces para conseguirlo Mmmmm</h1>`
        

    }
    
})


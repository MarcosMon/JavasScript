let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e,target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {

    if (distance < 30){
        return "Muy calentito papi sigue";
    }

    else if ( distance < 45){
        return "Caliente Caliente Mmmm";
    }

    else if(distance < 100){
        return "Te estas acercando ^^";
    }

    else if(distance < 220){
        return "Me estas enfriando :S";
    }

    else
        return "Vamos mal.. Puto loser";
}


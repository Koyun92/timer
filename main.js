

let time = Number(document.querySelector(`.time`).innerHTML);
const infoShowed = document.querySelector('.counter');
let mainCountingId;
let finalCountingId;
const finalCountdown = () => {
    time--;
    infoShowed.innerHTML = `${time}`;

    if (time === 0) {
        infoShowed.innerHTML = `${time}`;
        clearInterval(finalCountingId);

    }
}
const countdown = () => {


    time--;
    infoShowed.innerHTML = `${time}`;
    if (time === 0) {
        infoShowed.innerHTML = `${time}`;
        time = 5;
        clearInterval(mainCountingId);
        finalCountingId = setInterval(finalCountdown, 1000)



    }
}

// countdown('.time', '.counter');


mainCountingId = setInterval(countdown, 1000);

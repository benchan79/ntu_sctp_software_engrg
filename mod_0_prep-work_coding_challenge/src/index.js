const road = document.querySelector("#road");
road.width = 1200;

// const car_elem = document.getElementById("car");
const car = document.querySelector(".absolute");
car.width = 256;

let modifier = 10

document.addEventListener('keydown', (e) => {
    const car_pos = parseFloat(getComputedStyle(car).left);
    // console.log(car_pos)
    switch (e.code) {
        case 'KeyA':
            if (car_pos > 10) {
                car.style.left = `${car_pos - modifier}px`;
            }
            break;
        case 'KeyD':
            if (car_pos < (road.width-car.width)) {
                car.style.left = `${car_pos + modifier}px`;
            }
            break;
        default:
        // do nothing
    }
});
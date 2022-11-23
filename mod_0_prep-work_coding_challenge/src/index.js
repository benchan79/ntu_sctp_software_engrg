const road = document.querySelector("#road");
road.width = 1200;

const car = document.querySelector("#car");
car.width = 256;

let modifier = 10

document.addEventListener('keydown', (e) => {
    const car_pos = parseFloat(getComputedStyle(car).left);
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
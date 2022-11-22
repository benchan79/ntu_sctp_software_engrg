const road = document.querySelector("#road");
road.width = 1200;

const car = document.querySelector(".absolute");

// const car_elem = document.getElementById("car");

let modifier = 10;

document.addEventListener('keydown', (e) => {
    const car_pos = parseFloat(getComputedStyle(car).left);

    switch (e.code) {
        case 'KeyA': car.style.left = `${car_pos - modifier}px`;
        break;
        case 'KeyD': car.style.left = `${car_pos + modifier}px`;
        break;
    }
});
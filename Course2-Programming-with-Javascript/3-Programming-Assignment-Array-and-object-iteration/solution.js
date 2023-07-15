// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (prod of dairy) {
        console.log(prod);
    }
}

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for ([key, value] of Object.entries(bird)) {
        console.log(`${key}: ${value}`);
    }
}


// Task 3
function animalCan() {
    for (key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`);
    }

    for (key of Object.keys(animal)) {
        console.log(`${key}: ${animal[key]}`);
    }
 
}

logDairy();
birdCan();
animalCan();

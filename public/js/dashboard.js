const voltooi = document.querySelectorAll('.voltooi');
const vrolijk = 'vrolijk - 1.png'
const neutraal = 'neutraal - 1.png'
const humeurig = 'humeurig - 1.png'
const dood = 'dood - 1.png'
let mood = 1;
let fitness = 400;
let huidigeStand = document.querySelector('#stand')

const stand = () => {
    fitness = fitness - 10;

    if (fitness > 200) {
        mood = 1;
        huidigeStand.textContent = "Fitness: " + (fitness)
    }
    if (fitness < 400) {
        mood = 2;
        huidigeStand.textContent = "Fitness: " + (fitness)
    }
    if (fitness < 200) {
        mood = 3;
        huidigeStand.textContent = "Fitness: " + (fitness)
    }
    if (fitness <= 0) {
        mood = 4;
    }

    if (mood === 1) {
        document.querySelector("img").src = "images/" + vrolijk
    }
    if (mood === 2) {
        document.querySelector("img").src = "images/" + neutraal
    }
    if (mood === 3) {
        document.querySelector("img").src = "images/" + humeurig
    }
    if (mood === 4) {
        document.querySelector("img").src = "images/" + dood
    }
} 
setInterval(stand, 1000)

const levelPlus = () => {
        fitness = fitness + 100
}

voltooi.forEach(button => {
    button.addEventListener("click", levelPlus)
})
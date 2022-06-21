const voltooi = document.querySelectorAll('.voltooi');
const vrolijk = ['ch2_st4.png', 'ch1_st4.png']
const neutraal = ['ch2_st3.png', 'ch1_st3.png']
const humeurig = ['ch2_st2.png', 'ch1_st2.png']
const dood = ['ch2_st1.png', 'ch1_st1.png']
const welkPoppetje = Math.floor(Math.random() * 2);
let mood = 1;
let fitness = 190;
let levend = true;
let huidigeStand = document.querySelector('#stand')

const stand = () => {
    if (levend == true) {
        fitness = fitness - 10;
    }

    if (fitness > 400) {
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
    if (fitness == 0) {
        mood = 4;
    }

    if (mood === 1) {
        document.querySelector("img").src = "images/" + vrolijk[welkPoppetje]
    }
    if (mood === 2) {
        document.querySelector("img").src = "images/" + neutraal[welkPoppetje]
    }
    if (mood === 3) {
        document.querySelector("img").src = "images/" + humeurig[welkPoppetje]
    }
    if (mood === 4) {
        document.querySelector("img").src = "images/" + dood[welkPoppetje]
        levend = false
    }
} 
setInterval(stand, 1000)

const levelPlus = () => {
    levend = true
    fitness = fitness + 100
    const anim = document.querySelector('.animation')
    anim.classList.remove("finish")
    setTimeout(function () {
        anim.classList.add("finish")
    }, 0)
}

voltooi.forEach(button => {
    button.addEventListener("click", levelPlus)
})
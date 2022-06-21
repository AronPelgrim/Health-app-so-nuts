const voltooi = document.querySelectorAll('.voltooi');
const animeren = document.querySelectorAll('.animeren');
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

const checkTamagotchi = () => {
    if (typeof(huidigeStand) != 'undefined' && huidigeStand != null) {
        setInterval(stand, 1000)
    }
}

const levelPlus = () => {
    levend = true
    fitness = fitness + 200
    const anim = document.querySelector('.animation')
    anim.classList.remove("finish")
    setTimeout(function () {
        anim.classList.add("finish")
    }, 0)
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 400)
}

const animeer = () => {
    const anim = document.querySelector('.animation')
    anim.classList.remove("finish")
    setTimeout(function () {
        anim.classList.add("finish")
    }, 0)
}

voltooi.forEach(button => {
    button.addEventListener("click", levelPlus)
})

animeren.forEach(button => {
    button.addEventListener("click", animeer)
})

window.addEventListener('load',function(){
    checkTamagotchi()
})
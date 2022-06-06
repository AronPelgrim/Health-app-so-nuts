const form = document.querySelector('form')
const submit = document.querySelector('input[type=submit]')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
const fieldsets = document.querySelectorAll('.fieldset')
const popUp = document.querySelector('.validate')
const total = fieldsets.length
let count = 0

const hideAll = () => fieldsets.forEach( q => q.classList.remove("visible") )

const showNext = () => {
    prevBtn.style.display = 'block'
    if(count < total-1){
        count++
    }
    if(count == total -1) {
        nextBtn.style.display = 'none'
    }
  hideAll()
  fieldsets[count].classList.add("visible")
}

const showPrev = () => {
    nextBtn.style.display = 'block'
    if(count > 0) {
        count--
    }
    if(count == 0) {
        prevBtn.style.display = 'none'
    }
  hideAll()
  fieldsets[count].classList.add("visible")
}

const loading = () => {
    prevBtn.style.display = 'none'
    fieldsets[0].classList.add("visible")
}

const validate = () => {
    if (form.checkValidity()) {
      form.submit()
    } else {
        popUp.classList.add('popup')
    }
}

const removeValidate = () => { 
    if (popUp.classList.contains('popup')) {
        popUp.classList.remove('popup')
    }
}

submit.addEventListener("click", () => {
    validate()
})

form.addEventListener("input", () => {
    removeValidate()
})

window.addEventListener('load',function(){
    loading()
})

nextBtn.addEventListener('click',function(){
  showNext()
})

prevBtn.addEventListener('click',function(){
  showPrev()
})
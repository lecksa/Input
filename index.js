// let inp = document.querySelector('input')

// inp.onkeyup = () => {
//     let val = +inp.value
//     if(isNaN(val)){
//         console.log('error');
//         inp.style.border = '5px solid green'
//     }else{
//         inp.style.border = '5px solid red'

//     }
//     console.log(inp.value);
// }


let form = document.forms.wrap
let inputs = document.querySelectorAll('.success input')
let simps = document.querySelectorAll('.sim input')

let rights = document.querySelector('.Right')
let wrongs = document.querySelector('.Wrong')


form.onsubmit = (event) => {
    event.preventDefault();

    
    let errors = 0
    
    let successes = 0
    
    simps.forEach(sim => {
        if(sim.value.length > 0){
            successes++
        }
    })

    inputs.forEach(inp => {
        if (inp.value.length === 0) {
            inp.parentElement.classList.remove('success')
            inp.parentElement.classList.add('error')
            errors++
        } else {
            inp.parentElement.classList.remove('error')
            inp.parentElement.classList.add('success')
            successes++
        }
    })
    
    if(errors > 0){
        alert('Вы должны заполнить все обязательные пункты!')
        wrongs.innerHTML = errors
        rights.innerHTML = successes
    }else{
        rights.innerHTML = successes
        wrongs.innerHTML = errors
        button()
    }
}

function button() {
    let person = {}

    let data = new FormData(form)

    data.forEach((value, key) => {
        person[key] = value
    })

    console.log(person);
}

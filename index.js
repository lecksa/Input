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
let all_inputs = document.querySelectorAll('form input')

let rights = document.querySelector('.Right')
let wrongs = document.querySelector('.Wrong')

const patterns = {
    name: /^[A-Z][a-zA-Z]+$/i,
    surname: /^[A-Z][a-zA-Z]+$/i,
    email_address: /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/,
    phone_number: /^[+]998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/
}


form.onsubmit = (event) => {
    event.preventDefault();


    let errors = 0

    let successes = 0

    // simps.forEach(sim => {
    //     if (sim.value.length > 0) {
    //         successes++
    //     }
    // })

    all_inputs.forEach(inp => {
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

    if (errors > 0) {
        alert('Вы должны заполнить все обязательные пункты!')
        wrongs.innerHTML = errors
        rights.innerHTML = successes
    } else {
        wrongs.innerHTML = errors
        rights.innerHTML = successes
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

all_inputs.forEach(inp => {
    inp.onkeyup = () => {
        let reg = patterns[inp.name]

        if(inp.name === 'age'){
            if(inp.value > 0 && inp.value <= 200){
                inp.parentElement.classList.remove('error')
            }else{
                inp.parentElement.classList.add('error')
            }
            return
        }

        if(reg.test(inp.value)){
            inp.parentElement.classList.remove('error')
        }else{
            inp.parentElement.classList.add('error')
        }
    }
})
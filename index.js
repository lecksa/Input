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

let nme = document.querySelector('#name')
let snme = document.querySelector('#surname')
let email_address = document.querySelector('#email_address')
let phone_number = document.querySelector('#phone_number')
let mom = document.querySelector('#mom')
let pap = document.querySelector('#pap')
let car = document.querySelector('#car')
let age = document.querySelector('#age')
let about_you = document.querySelector('#about_you')
let JavaScript = document.querySelector('#JavaScript')
let _HTML = document.querySelector('#HTML')
let _CSS = document.querySelector('#CSS')


form.onsubmit = (event) => {
    event.preventDefault();


    let errors = 0

    let successes = 0

    // simps.forEach(sim => {
    //     if (sim.value.length > 0) {
    //         successes++
    //     }
    // })

    inputs.forEach(inp => {
        if (inp.value.length === 0) {
            inp.parentElement.classList.remove('success')
            inp.parentElement.classList.add('error')
            // errors++
        } else {
            inp.parentElement.classList.remove('error')
            inp.parentElement.classList.add('success')
            // successes++
        }
    })



    if (/^[A-Z][a-zA-Z]+$/i.test(nme.value)) {
        nme.parentElement.classList.add('success')
        nme.parentElement.classList.remove('error')
        successes++
    } else {
        nme.parentElement.classList.remove('success')
        nme.parentElement.classList.add('error')
        errors++
    }

    if (/^[0-9]+$/i.test(age.value)) {
        age.parentElement.classList.add('success')
        age.parentElement.classList.remove('error')
        successes++
    } else {
        age.parentElement.classList.remove('success')
        age.parentElement.classList.add('error')
        errors++
    }

    if (/^[A-Z][a-zA-Z]+$/i.test(about_you.value)) {
        about_you.parentElement.classList.add('success')
        about_you.parentElement.classList.remove('error')
        successes++
    } else {
        about_you.parentElement.classList.remove('success')
        about_you.parentElement.classList.add('error')
        errors++
    }

    if (/^[A-Z][a-zA-Z]+$/i.test(JavaScript.value)) {
        JavaScript.parentElement.classList.add('success')
        JavaScript.parentElement.classList.remove('error')
        successes++
    } else {
        JavaScript.parentElement.classList.remove('success')
        JavaScript.parentElement.classList.add('error')
        errors++
    }

    if (/^[A-Z][a-zA-Z]+$/i.test(_HTML.value)) {
        _HTML.parentElement.classList.add('success')
        _HTML.parentElement.classList.remove('error')
        successes++
    } else {
        _HTML.parentElement.classList.remove('success')
        _HTML.parentElement.classList.add('error')
        errors++
    }

    if (/^[A-Z][a-zA-Z]+$/i.test(_CSS.value)) {
        _CSS.parentElement.classList.add('success')
        _CSS.parentElement.classList.remove('error')
        successes++
    } else {
        _CSS.parentElement.classList.remove('success')
        _CSS.parentElement.classList.add('error')
        errors++
    }

    if (/[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/.test(email_address.value)) {
        email_address.parentElement.classList.add('success')
        email_address.parentElement.classList.remove('error')
        successes++
    } else {
        email_address.parentElement.classList.remove('success')
        email_address.parentElement.classList.add('error')
        errors++
    }

    if (/^[A-Z][a-zA-Z]+$/i.test(snme.value)) {
        snme.style.border = '1px solid rgb(134, 117, 209)'
        successes++
    } else {
        snme.style.border = '2px solid rgb(211, 128, 128)'
    }

    if (/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/.test(phone_number.value)) {
        phone_number.style.border = '1px solid rgb(134, 117, 209)'
        successes++
    } else {
        phone_number.style.border = '1px solid rgb(211, 128, 128)'
    }

    if (/^[A-Z][a-zA-Z]+$/i.test(mom.value)) {
        mom.style.border = '1px solid rgb(134, 117, 209)'
        successes++
    } else {
        mom.style.border = '1px solid rgb(211, 128, 128)'
    }

    if (/^[A-Z][a-zA-Z]+$/i.test(pap.value)) {
        pap.style.border = '1px solid rgb(134, 117, 209)'
        successes++
    } else {
        pap.style.border = '2px solid rgb(211, 128, 128)'
    }

    if (/^[A-Z][a-zA-Z0-9]+$/i.test(car.value)) {
        car.style.border = '1px solid rgb(134, 117, 209)'
        successes++
    } else {
        car.style.border = '2px solid rgb(211, 128, 128)'
    }



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

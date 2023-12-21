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


let inp = document.querySelectorAll('.item_2')
let h1 = document.querySelectorAll('.item_3')
let img = document.querySelectorAll('img')
let but = document.querySelector('button')
let error = document.querySelector('.error')
let success = document.querySelector('.success')

inp.forEach((input, idx) => {
    let inp_val = input[idx].value
    if (inp_val === "") {
        inp_val.classList.toggle('active_2')
        h1.classList.toggle('active_3')
        img.src = "./img/error warning.jpg"
     } 
    //else {
    //     input.classList.remove('active_2')
    //     h1.classList.remove('active_3')
    //     but.type = 'submit'
    // }
})

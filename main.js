let scren = document.getElementById('screen');
let inp = document.getElementById('inp');

inp.addEventListener('keyup', ()=>{
    scren.innerText = inp.value
})

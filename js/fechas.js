

let hoy = new Date();
let dia = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
let hora = hoy.getHours() + ':' + hoy.getMinutes();    // + ':' + hoy.getSeconds();
let diaYHora = dia + ' --- ' + hora;
let mesAnte = hoy.getMonth() + '-' + hoy.getFullYear();
let tAnio= hoy.getFullYear() 


console.log (diaYHora)

// let h3 = document.querySelector("h3")
// h3.innerHTML =  diaYHora 

let fechaActual = document.querySelector(".fechaActual")
fechaActual.innerHTML =  dia 

let mesAnt = document.querySelector(".mesAnt")
mesAnt.innerHTML =  mesAnte 

let totAnio = document.querySelector(".totAnio")
totAnio.innerHTML = 'Total del Año: ' + tAnio 


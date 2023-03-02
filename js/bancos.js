const bancosPriv = ["BBVA", "Galicia", "Patagonia" ];
const bancosPub = ["ProvinciaBA", "Ciudad", "StaFe" ];
const billeterasVirtuales = ["uala", "MercadoP", "bruk", "naranja"];
const tarjetasCredito =["visa", "Mastercard", "American"]

console.log(bancosPriv.length);
console.log(bancosPriv);
console.log(bancosPub);
console.log(billeterasVirtuales.length);
console.log(tarjetasCredito.length);

bancosPriv.push("Rio");
bancosPriv.unshift("Macro");
console.log(bancosPriv.length);
console.log(bancosPriv);

billeterasVirtuales.shift();
billeterasVirtuales.unshift("UALA");
console.log(billeterasVirtuales);

console.log(tarjetasCredito);
tarjetasCredito.splice(2,1);
console.log(tarjetasCredito);
tarjetasCredito.unshift("American Express");
console.log(tarjetasCredito);
console.log(tarjetasCredito.join(" * "))

const bancos = bancosPriv. concat(bancosPub);
console.log(bancos);

console.log(bancos.indexOf("bbva"));
console.log(bancos.indexOf("BBVA"));
console.log(bancos.indexOf("Rio"));
console.log(bancos.includes("Galicia"));
console.log(bancos.includes("santander"));
bancos.reverse();
console.log(bancos);
bancos.reverse();
console.log(bancos);

let tarjCredNueva = prompt ("Ingresar nuevo Tarjeta de credito")
tarjetasCredito.push(tarjCredNueva);
console.log(tarjetasCredito);

    

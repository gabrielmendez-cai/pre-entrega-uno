


// se crea una clase que  de tipo de moneda y precio el cual se las define como objetos 


class moneda {
  constructor (tipoMoneda, precio){
  this.tipoMoneda = tipoMoneda
  this.precio = precio
  }
}

const listaMoneda =[];

listaMoneda.push (new moneda ("dolar", 290));
listaMoneda.push (new moneda ("euro" , 320));
listaMoneda.push (new moneda ("libra" , 450));
// esta funcion  monedas es para que el cliente ingrese por prompt que moneda desea adquirir , dentro de la funcion
// hay un if con las distintas opciones para elegir  con sus precios y seguir con el flujo 
function monedas () {
monedaCliente = prompt("ingrese moneda que desea adquirir: dolar - euro - libra")
if (monedaCliente === "dolar"){
  alert (`Elegiste ${listaMoneda[0].tipoMoneda} 1 dolar = 290 ars `);
}else if (monedaCliente === "euro"){
alert(`Elegiste ${listaMoneda[1].tipoMoneda} 1 euro = 320 ars`);

}else if (monedaCliente === "libra"){
alert (`Elegiste ${listaMoneda[2].tipoMoneda} 1 libra = 450 ars ` )

}else {
alert ("ingresa una opcion valida por favor")
monedas()
   }
}
//esta funcion es para que el cliente ingrese la cantidad de la moneda elegida 
//se abre un if , se le da una funcion  y dependiendo de lo q elija se le va a dar la cuenta total, para ello se usaron
// bastics para hacer variables tanto de la moneda la cantidad que requiere , y la moneda que quiere comprar 
// se abren if con las distintas monedas dolar euro y libras cada uno con sus respectivas cuentas
function compraMoneda () {
const cantidad = parseInt(prompt(`cantidad en ${monedaCliente} que quiere adquirir:`))
if (cantidad > 0) {
  if (monedaCliente === "dolar") {
    alert (`costo por comprar en ${cantidad} ${monedaCliente}: ${cantidad * 290} pesos `);
    alert(` ${cliente}, se ha realizado la compra de ${cantidad} ${monedaCliente}`)
  }else if (monedaCliente === "euro"){
    alert(`costo por comprar en ${cantidad} ${monedaCliente}:  ${cantidad * 320} pesos  `);
    alert(` ${cliente}, se ha realizado la compra de ${adquisicion} ${monedaCliente}`)
  }else if (monedaCliente === "libra") {
    alert (`costo por comprar en ${cantidad} ${monedaCliente}: ${cantidad * 450} pesos `);
    alert(` ${cliente}, se ha realizado la compra de ${cantidad} ${monedaCliente}`)
  }else {
    alert ("monto no permitido")
    compraMoneda ()
  }
}
alert('Gracias por utilizar nuestros servicios, vuelva pronto')
}

let monedaCliente;
alert ("BIENVENIDO A FUTURE XCHANGE")
let cliente = prompt("ingrese su nombre ").toLocaleUpperCase ();
alert ("saludos "+ cliente);
monedas ()
compraMoneda()
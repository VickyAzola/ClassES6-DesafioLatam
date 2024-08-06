import {Cliente} from './cliente.js';
import {Impuestos} from './impuestos.js';

//crear instancia impuesto
const impuesto1 = new Impuestos(1000000, 50000);
//pasa estos datos al segundo parametro de cliente
const cliente1 = new Cliente('Victoria', impuesto1);

const impuesto2 = new Impuestos(800000, 20000);
const cliente2 = new Cliente('Tala', impuesto2);


//-- mostrar en HTML ----
let infoCliente = document.getElementById("info")
infoCliente.innerHTML = `
  <p>El impuesto a pagar por ${cliente1.nombre} es ${cliente1.calcularImpuesto()}</p>
  <p>El impuesto a pagar por ${cliente2.nombre} es ${cliente2.calcularImpuesto()}</p>
`
//-- mostrar en consola ----
console.log(`El impuesto a pagar por ${cliente1.nombre} es ${cliente1.calcularImpuesto()}`)
console.log(`El impuesto a pagar por ${cliente2.nombre} es ${cliente2.calcularImpuesto()}`)
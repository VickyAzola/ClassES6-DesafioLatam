"use strict";

var _cliente = require("./cliente.js");
var _impuestos = require("./impuestos.js");
//crear instancia impuesto
var impuesto1 = new _impuestos.Impuestos(1000000, 50000);
//pasa estos datos al segundo parametro de cliente
var cliente1 = new _cliente.Cliente('Victoria', impuesto1);
var impuesto2 = new _impuestos.Impuestos(800000, 20000);
var cliente2 = new _cliente.Cliente('Tala', impuesto2);

//-- mostrar en HTML ----
var infoCliente = document.getElementById("info");
infoCliente.innerHTML = "\n  <p>El impuesto a pagar por ".concat(cliente1.nombre, " es ").concat(cliente1.calcularImpuesto(), "</p>\n  <p>El impuesto a pagar por ").concat(cliente2.nombre, " es ").concat(cliente2.calcularImpuesto(), "</p>\n");
//-- mostrar en consola ----
console.log("El impuesto a pagar por ".concat(cliente1.nombre, " es ").concat(cliente1.calcularImpuesto()));
console.log("El impuesto a pagar por ".concat(cliente2.nombre, " es ").concat(cliente2.calcularImpuesto()));
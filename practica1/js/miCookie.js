//metodos que define la teoria de cookies
function setCookie(nombre, valor, expiracion) {
    var d = new Date();
    d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
    var expirar = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ":" + expirar + ";path=/";
}
function getCookie(nombre) {
    var nom = nombre + "=";
    var array = document.cookie.split(";");
    for (var i = 0; i < array.length; i++) {
        var c = array[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(nombre) == 0) {
            return c.substring(nom.length, c.length);
        }
    }
    return "";
}
//METODOS PROPIOS
var verCookies = function () {
    alert("LAS COOKIES ACTUALES SON:\n" + document.cookie);
}
var crear = function () {
    var nombre = prompt("INGRESAR EL NOMBRE DE LA COOKIE");
    var valor = prompt("INGRESAR EL VALOR DE LA COOKIE");
    var expiracion = prompt("INGRESE EL NUMERO DE DIAS QUE ESTE LA COOKIE");
    setCookie(nombre, valor, expiracion);
}
var eliminar = function () {
    var nombre = prompt("INGRESAR EL NOMBRE DE LA COOKIE A ELIMINAR");
    setCookie(nombre, "", 0);
}
var buscar = function () {
    var nombre = prompt("INGRESAR EL NOMBRE DE LA COOKIE PARA BUSCARLA");
    var resultado = getCookie(nombre);
    alert(resultado);
}
window.onload = function () {
    var botonVC = document.getElementById("verTodas");
    botonVC.onclick = function () {
        verCookies();
    }
    var botonCC = document.getElementById("crear");
    botonCC.onclick = function () {
        crear();
    }
    var botonMC = document.getElementById("modificar");
    botonMC.onclick = function () {
        crear();
    }
    var botonEC = document.getElementById("eliminar");
    botonEC.onclick = function () {
        eliminar();
    }
    var botonBC = document.getElementById("buscar");
    botonBC.onclick = function () {
        buscar();
    }
};
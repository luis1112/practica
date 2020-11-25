function saludar(){
    alert("hola");
}
function sumar(){
    numero1 = parseInt(document.getElementById("n1").value);
    numero2 = parseInt(document.getElementById("n2").value);
    resultado= numero1+numero2;
    alert("suma es: "+ resultado);
}
function invertir(){
    var cadenaObtenida = document.getElementById("cadena").innerText;
    var vector= cadenaObtenida.split('');
    var reversa= vector.reverse(); 
    var cadenaInvertida= reversa.join('');
    document.write(cadenaInvertida);
}
function validarFomulario(){
    var nombres = document.getElementById("nombres");
    if(nombres == ""){
        alert("Por favor dígite el usuario");
    }
}

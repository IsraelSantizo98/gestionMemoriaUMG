/*
var text = prompt('Ingrese texto');
function convertFromHex(hex) {
    var hex = hex.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function convertToHex(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
}
*/
function verificarTexto(){
    
}
function convertirHex(){
    var texto = document.getElementById('mensaje').value;
    console.log(texto);
    //var hex = text.toString();
    var arr1 = [];
	for (var n = 0, l = texto.length; n < l; n ++) 
     {
		var hex = Number(texto.charCodeAt(n)).toString(16);
		arr1.push(hex);
        console.log(hex)
	 }
	return arr1.join('');
    document.getElementById('place').innerHTML = hex
}
//console.log(convertirHex('Quien es primero.'));
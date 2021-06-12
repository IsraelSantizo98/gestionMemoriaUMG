function convertirHex(){
    //Elementos en HTML A  utilizar 
    var texto = document.getElementById('mensaje').value;
    var table = document.getElementById('tableConvert');
    var table2 = document.getElementById('tableResult'); 

    console.log(texto);
    //Arrays para alamacenasr codigo ASCII
    // y conversion a binario
    var arr1 = [];
    var arr2 =[];

    //Conversion hexadecimal
	for (var n = 0, l = texto.length; n < l; n ++) 
     {
		var hex = Number(texto.charCodeAt(n)).toString(16);
        var bin = Number(texto.charCodeAt(n)).toString(2);
		arr1.push(hex);
        arr2.push(bin);
        console.log(hex)
        console.log(bin)
        document.getElementById('resultado').innerHTML = arr1;       
	 }
     
     //Conversion binaria
     for (var i = 0; i < arr1.length; i ++) 
     {
        //create new row
        var newRow = table.insertRow(table.length);

        for (let j = 1; j < arr1[i].length; j++) {

             // create new cells
            var cell = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);

            // add values to the cells
            cell.innerHTML = arr1[i];
            cell2.innerHTML = arr2[i];
        }
	 }

     for (var i = 0; i < arr1.length; i ++) 
     {
        //create new row
        var newRow = table2.insertRow(table2.length);

        for (let j = 1; j < arr1[i].length; j++) {

             // create new cells
            var cell = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);

            // add values to the cells
            cell.innerHTML = arr1[i];
            cell2.innerHTML = arr2[i];
        }
	 }
     
     
     return arr1.join("");
}
//console.log(convertirHex('Quien es primero.'));
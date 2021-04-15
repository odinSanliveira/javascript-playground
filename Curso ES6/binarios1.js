//in
somethin in somethingItems

//arrays
var arvores = new Array('pau-brasil', 'ipê', 'mangabeira');

0 in arvores; // retorna true
3 in arvores; // retorna true
4 in arvores; // retorna false

'ipê' in arvores; /*Retorna false
você deve especificar o número do índice
e não o valor dele.
*/

'length' in arvores; /*retorna true
lenght é propriedade de array*/

// Objects predefinidos
"PI" in Math; /*retorna true*/
var minhaString = new String('coral');
'length' in minhaString; // retorna true

//objects personalizados
var meucarro = {marca: 'honda'};
'marca' in meucarro; //true
'modelo' in meucarro; //true


//instanceof
objeto instanceof tipoObjeto;

var dia = new Date();
if (dia instanceof Date){} //tue
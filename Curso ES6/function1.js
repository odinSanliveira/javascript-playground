function fn(){
    return 'Code here';
}

//mais de uma construção de function
const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    return 'Code here';
}

//funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);


//receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());


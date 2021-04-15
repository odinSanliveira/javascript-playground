function getName(){
	return 'Odin Santos Oliveira';
}

function logFn(fn){
	console.log(fn());
}
//atribuindo a função logFn a variável logFnResult
const logFnResult = logFn;

logFnResult(getName);

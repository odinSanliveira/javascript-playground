this.name = "nome completo";

const getNameArrowFn = () => this.name;

//this vai referenciar ao objeto que está chamando
//a função
function getName(){
    return this.name;
}
//user adiciona as duas funções como propriedades
const user =  {
    name: 'nome do object',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());
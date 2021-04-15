//criando um objeto user
const user = {
    name:'Odin',
    lastname: 'Santos Oliveira'
}

//criação de uma função para juntar os nomes
//criando um novo object com os mesmo atributos + fullname
function getFullName(usuario){
    return{
        ...usuario,
        fullname: `${usuario.name} ${usuario.lastname}`
    }
}

const userWithFullName = getFullName(user);

console.log(userWithFullName);


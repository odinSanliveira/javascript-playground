
//atribuir os valores de partes em música
var partes = ['ombro', 'joelho'];
var musica = ['cabeça', ...partes, 'e', 'pés'];


function fn(x, y, z){
    return Math.min(x, y, z);
}
var args = [2, 12, 29];
console.log(fn(...args));
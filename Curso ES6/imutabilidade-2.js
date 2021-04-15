const films = [

    {
        name: 'Hamilton',
        year: 2020,
        tipo : ['musical', 'drama', 'romance']
    },

    {
        name: 'Soul',
        year: 2020,
        tipo : ['musical', 'animação']
    },
    {
        name: 'Dear Evan Hansen',
        year: 2021,
        tipo : ['musical', 'drama']
    },
    {
        name: 'Wicked',
        year: 2003,
        tipo : ['musical']
    }


];

//descobrir como filtrar por drama
function getDrama(films){
    //filtrar o array?
    return films.filter(films => films.tipo === 'drama');
}
function presentationFilms(film){
    return {
        ...film
        // title: `${film.name} ${film.year}`
    }
}

allFilms = presentationFilms(films);
console.log('todos os filmes');
// console.log(allFilms);
console.log(getDrama(films));
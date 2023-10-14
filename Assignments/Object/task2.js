var movie = {
    title: 'Baahubali',
    director: 'Rajamouli',
    producers: ['Sobhu', 'Raghavendra', 'Prasad'],
    'lead actors with their roles': {
        prabhas: 'Baahubali',
        anushka: 'Devasena',
        rana: 'Bhallaladeva',
        tamannah: 'Avanthika'
    }

}

console.log(movie.title );
console.log(movie.director );
console.log(movie.producers );
console.log(movie["lead actors with their roles"].prabhas );
console.log(movie["lead actors with their roles"].anushka );
console.log(movie["lead actors with their roles"].rana );
console.log(movie["lead actors with their roles"].tamannah );

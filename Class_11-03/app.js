// Naudojant ES6 klases sukurkite objekto Filmas (Movie) kūrimo konstruktorių, kuris turės šias savybes: 

// 1. name; 2. year; 3. director; 4. budget; 5. income. 

// ir metodus: 

// 1. getIntroduction, kuris grąžins filmo pilną pavadinimą (su name, year, director); 

// 2. getProfit, kuris grąžins sumą, kurią uždirbo (pelną) filmas.

// Testavimui, sukurkite du filmus, kurie turės nurodytas savybes ir metodus.


let movie_1 = new Movie('Fargo', 1989, 'John Cena', '1450000', '5000000');
let movie_2 = new Movie('Jurassic Park', 1999, 'Bono', '1200000', '6000000');


console.log(movie_2.getIntroduction());
console.log(movie_1.getProfit());
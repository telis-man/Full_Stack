// Naudojant ES6 klases sukurkite automobilių objektų kūrimo konstruktorių (Car), 
// kuris turės šias savybes: make model year ir metodus:
	
// getIntroduction, kuris grąžins pilną pavadinimą (su make ir model).
		
// getAge, kuris gražins “10 metų arba naujesnis”, jei automobilio amžius yra 10 metų
// arba naujesnis arba “11 metų arba senesnis”, jei automobilio amžius yra 11 metų arba senesnis
// (šio metodo logikai naudokite ternary operatorių ir Date() metodą)


let car1 = new Car('BWM', 'X4', 2006);
let car2 = new Car('Ford', 'Transit', 2018);
let car3 = new Car('Skoda', 'Octavia', 1999);


console.log(car1.getAge());
console.log(car2.getAge());
console.log(car3.getAge());
console.log(car1.getIntroduction());
console.log(car2.getIntroduction());
console.log(car3.getIntroduction());
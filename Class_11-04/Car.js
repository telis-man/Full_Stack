class Car {

	constructor(brand, model, year){
		this.brand = brand;
		this.model = model;
		this.year = year;
	}
    
	getIntroduction(){
		return {brand: this.brand, model: this.model};
	};

	getAge(){
		
		new Date().getFullYear()-this.year>10 ? console.log('11 metu arba senesnis') : console.log('10 metu arba naujesnis')

	}
}

// Naudojant ES6 klases sukurkite automobilių objektų kūrimo konstruktorių (Car), 
// kuris turės šias savybes: make model year ir metodus:
	
// getIntroduction, kuris grąžins pilną pavadinimą (su make ir model).
		
// getAge, kuris gražins “10 metų arba naujesnis”, jei automobilio amžius yra 10 metų
// arba naujesnis arba “11 metų arba senesnis”, jei automobilio amžius yra 11 metų arba senesnis
// (šio metodo logikai naudokite ternary operatorių ir Date() metodą)



















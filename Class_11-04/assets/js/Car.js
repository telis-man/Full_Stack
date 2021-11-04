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




















class Car {

	constructor(brand, model, year){
		this.brand = brand;
		this.model = model;
		this.year = year;
	}
    
	getIntroduction(){
		return {brand: this.brand, model: this.model};
	}

	getAge(){
		return new Date().getFullYear()-this.year>10 ? '11 metu arba senesnis' : '10 metu arba naujesnis'
	}
	set setModel(param){
		this.model = param;
	}
}




















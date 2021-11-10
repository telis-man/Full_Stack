class Motorcycle extends Car {

	constructor(brand, model, year, wheels){
		super(brand, model, year);
		this.wheels = wheels;
	}
    
	getWheelsNumber(){
		return this.wheels;
	}
}




















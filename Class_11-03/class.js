class Movie {

	constructor(name, year, director, budget, income){

		this.name = name;
		this.year = year;
		this.director = director;
		this.budget = budget;
		this.income = income;
	}
    
	getIntroduction(){
		return {name: this.name, year: this.year, director: this.director};
	};
	getProfit(){
		return +this.income-(+this.budget);
	}
}
// Parašykite funkciją getPosts, kuri gražina Promise, kuriame yra išgaunami 
// post'ai iš https://jsonplaceholder.typicode.com/posts panaudojant vieną iš galimų AJAX būdų: XMLHttpRequest, fetch, jQuery, axios.
// Užsibaigus Promise atvaizduokite gautus duomenys HTML lentelėje.

//Retreiving the data array with Axios

function getPosts_Axios(){

	return new Promise(function(resolve, reject) {
		//let axios = require('axios');
		axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
	    	resolve(response.data);
		})
		.catch(function (error) {
			reject(error);
		});
	});
}


//Retreiving the data array with XMLHttpRequest

function getPosts_XMLHttpReq(){

	return new Promise(function(resolve, reject) {

    let reQ = new XMLHttpRequest();
    reQ.open('GET','https://jsonplaceholder.typicode.com/posts');
    reQ.onload = () => {
      (this.status != 200) ? resolve(JSON.parse(reQ.response)) : reject('Error');
    };
    reQ.send();
	});
}

//Retreiving the data array with Fetch
function getPosts_Fetch(){

	return new Promise(function(resolve, reject) {

		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => resolve(data))
			.catch((error) => {
  				reject('Error')
  			});
	});
}

//Enter data retrieving function
getPosts_Axios().then((data) =>{
	
	//Inserting array of objects into the table
	for (let object of data) {

		let tbodyRef = document.querySelector('table');
		// Insert a row at the end of table
		let newRow = tbodyRef.insertRow()

  		for (const property in object) {
  			
  			console.log(object);;

			// Insert a cell at the end of the row
			let newCell = newRow.insertCell();

			// Append a text node to the cell
			let newText = document.createTextNode(object[property]);
			newCell.appendChild(newText);
		}
	}

	//Styling
	document.querySelector('table').style.border = "1px solid black";
	document.querySelector('table').style.borderCollapse = "collapse";

	let td = document.querySelectorAll('td');
	for (let element of td){
		element.style.border = "1px solid black";
		element.style.padding = "10px";
	}
});

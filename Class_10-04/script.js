// Parašykite if...else sąlygą, kuri: 


	
// consolė’je atspausdins lyginis“, jei skaičius yra lyginis skaičius;
	
// consolė’je atspausdins „nelyginis“, jei skaičius yra nelyginis skaičius.


// Įsitikinkite, kad išbandėte savo kodą su skirtingomis vertėmis. 

// Pvz.: Jei skaičius lygus 1, tada konsolėje turėtų būti atspausdinama “nelyginis”.


// function minFunc(p1, p2) {

// 	if(p1>p2)
// 	{
// 		return p2;
// 	}

// 	else if(p2>=p1){
// 		return p1;
// 	}
// 	else{	
// 		return(alert("There's no proper answer according to the given inputs"));
// 	}
// }

// let input = +prompt("Iveskite skaiciu kurio skaitmenis norite susumuoti")
// let arrowFunkcija = input => {
// if (input == 0) {
//     return 0;
//     }
//     return (input % 10) + arrowFunkcija(Math.floor(input / 10));
// }
// console.log(input);

// let sum1 = (m) => {
//     if (m == 0) {return 0
//     }
//     return (m % 10 + sum(parseInt(m / 10)))};
// console.log("sum1 " + sum1(547))


// let num = +prompt("Input number:")

// let getSum = num => 16/num*10;


// console.log(getSum(16));

// let input = 'ASILAS';


// function rearrangeInput(input){
	
// 	input = input.toString();
// 	let reversed="";

// 	for(let i = input.length - 1; i >= 0 ; i--){
// 		 reversed += input[i];
// 	}

// 	return reversed;
// }


// console.log(rearrangeInput('Lauzas'))

// function reverseString(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString('abc'))

// //Parašykite „JavaScript“ funkciją "alphabetOrder" kuri grąžina perduotą eilutę su raidėmis abėcėlės tvarka.

// const string = prompt('Enter a sentence: ');

// // converting to an array
// const words = string.split(' ');

// // sort the array elements
// words.sort();

// // display the sorted words
// console.log('The sorted words are:');

// for (const element of words) {
//   console.log(element);
// }



// 1 UZDUOTIS

	 // let alphabetOrder = input => (((input.split('')).sort()).join(''));
	 // console.log(alphabetOrder('grybas'));
	 // console.assert(alphabetOrder('alphabetical') == 'aaabcehillpt');
 

 // 2 UZDUOTIS

// let returnLongestWord = input =>{
//         let SentenceArray = input.split(' ');
//         let LongestWord = input[0];
//         for (let i = 0; i < SentenceArray.length; i++)
//          {
//              if(SentenceArray[i].length>=LongestWord.length){
//                 LongestWord = SentenceArray[i];
//              }
//         }
//         return LongestWord;
//      }
//      console.log(returnLongestWord("Load up on guns bring your friends"));
//      console.assert(returnLongestWord('Load up on guns bring your friends') == 'friends');

 // 3 UZDUOTIS

	// function returnLongestWord(input, state) {


	//     let sentence_array = input.split(' ');
	//     let longest_word = sentence_array[0];
	//     let shortest_word = sentence_array[0];

	//     for (let i = 0; i < sentence_array.length; i++) {
	//         if (state == 'max') {
	//             if (sentence_array[i].length >= longest_word.length) {
	//                 longest_word = sentence_array[i];
	//             }
	//         }

	//         if (state == 'min') {
	//             if (sentence_array[i].length <= shortest_word.length) {
	//                 shortest_word = sentence_array[i];
	//             }
	//         }
	//     }

	//     if (state == 'max')
	//         return longest_word;
	//     if (state == 'min')
	//         return shortest_word;
	// }

	// let max = returnLongestWord('Lorem ipsum, dolor sit amet consectetur', 'max');
	// let min = returnLongestWord('Lorem ipsum, dolor sit amet consectetur', 'min');
	// console.log(max);
	// console.log(min);
	// console.assert(max == 'consectetur');
	// console.assert(min == 'sit');

 // 4 UZDUOTIS

	// function joinStuff(input) {

	// 	let joined_string = '';
	// 	for(let i = 0; i < arguments.length; i++){
	// 		joined_string+= arguments[i];
	// 	}
	// 	return joined_string;
	// }

	// console.log(joinStuff(5,5,1,2))
	// console.assert(joinStuff(5,5,1,2 == '5512'));

	//Naudodami for, while, doWhile ciklus parašykite visus lyginius skaičiuos nuo 2 iki 10;

//1 uzduotis 10-12

// console.log('For: \n')

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// console.log('While: \n')

// let j = 2;

// while (j <= 10) {
//     if (j % 2 == 0) {
//         console.log(j);

//     }
//     j++;
// }

// console.log('Do while: \n')

// let y = 2;

// do {
//     if (y % 2 == 0) {
//         console.log(y);
//     }
//     y++;
// } while (y <= 10);

//2 uzduotis

// Parašykite funkciją, pavadintą getLaugh(), kuri turi vieną parametrą, skaičių, kuris žymi sugrįžtančių „ha“ skaičių.

// function getLaugh (input){
// 	let main_string = '';
// 	 for (let i = 0; i < input; i++) {
//      	main_string+='ha';
//      }
//      return(main_string);
// }
//  console.log(getLaugh(5));
//  console.assert(getLaugh(5) == 'hahahahaha');

//  let getLaugh2 = (input) => {
// 	let main_string = '';
// 	 for (let i = 0; i < input; i++) {
//      	main_string+='ha';
//      }
//      return(main_string);
//  }

//  console.log(getLaugh2(5));
//  console.assert(getLaugh2(5) == 'hahahahaha');


//3 uzduotis

// Parašykite funkciją (arrow function), pavadintą getHighestNumber, kurios tikslas yra leisti vartotojui, kaip argumentus nurodyti 
// bet kokius skaičius ir grąžinama bus didžiausias skaičius iš visų nurodytų.
// Surasti didžiausia skaičių butina panadojus ciklą

// let getHighestNumber = (...input) =>{

// 	let highest_argument = input[0];

// 	 	 for(let i = 0; i < input.length; i++){
// 	 	 	if(input[i]>highest_argument){
// 	 	 		highest_argument =input[i];
// 	 		}
// 	 	 }
// 	 	return highest_argument;
// 	 }

//  console.log(getHighestNumber(34,7,8,55,6,56,7,9,52));
//  console.assert(getHighestNumber(34,7,8,55,6,56,7,9,52) == 56);

//4 uzduotis

// Panaudojant ciklus parodykitė tokias reikšmes:
// 111222333444555666777888999
// 11 12 13 21 22 23 31 32 33

 //  let getNumOrder_1 = (max_num) =>{

 //  	let final_string = '';
 //  	 	 for(let i = 1; i <= max_num; i++){
 //  	 	 	 for(let j = 0; j < 3; j++){
 //  	 	 	 	final_string+= i.toString();
 //  	 	 	 }
 //  	 	 }
 //  	 	return final_string;
 //  	 }

 // console.log(getNumOrder_1(9));


 // let getNumOrder_2 = (max_num) =>{

 // 	let final_string = '';
 // 	 	 for(let i = 1; i <= max_num; i++){
 // 	 	 	 for(let j = 1; j <= 3; j++){
 // 	 	 	 	final_string+= i.toString();
 // 	 	 	 	final_string+= j.toString();
 // 	 	 	 	final_string+=" ";
 // 	 	 	 }
 // 	 	 }
 // 	 	return final_string;
 // 	 }

//console.log(getNumOrder_2(3));

// let result = '';
// let result2 = '';

// function getNumOrder_1 (){
//   	 	 for(let i = 1; i <= 9; i++){
//   	 	 	 for(let j = 0; j < 3; j++){
//   	 	 	 	result+= i.toString();
//   	 	 	 }
//   	 	 }
//   	 }

// function getNumOrder_2 (){
//   	 	 for(let i = 1; i <= 3; i++){
//   	 	 	 for(let j = 1; j <= 3; j++){
//   	 	 	 	result2+= i.toString();
//   	 	 	 	result2+= j.toString();  	 	 	 	
//   	 	 	 	result2+=" ";
//   	 	 	 }
//   	 	 }
//   	 	 result2 = result2.trim();
//   	 }
  	 	 
// getNumOrder_1();
// getNumOrder_2();


// // SOME CODE
// console.log(result);
// console.assert(result == '111222333444555666777888999');
// // SOME CODE
// console.log(result2);
// console.assert(result2 == '11 12 13 21 22 23 31 32 33');

//1 uzduotis 10-14

// Pabandykime atlikti 5 masyvo (Array) operacijas. - 
// Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.
// Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.
// Viduryje esančią reikšmę pakeiskite „Classics“.
// Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.
// Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.

// let main_array = ['Jazz', 'Blues'];
// main_array.push('Rock-n-Roll');
// main_array[Math.floor((main_array.length-1)/2)] = 'Classics';
// console.log(main_array, main_array.shift());
// main_array.unshift('Rap','Reggae');
// console.log(main_array);

//2 uzduotis 10-14

// Sukurkite funkciją getMaxSubSum(arr), kuri sugrąžins masyvo (Array) visų įvestų skaičių, kurie yra didesni nei 0 sumą.

// function getMaxSubSum (input_array){

// 	let sum = 0;

// 	for(let i = 0; i < input_array.length; i++){

//   		if(input_array[i]>0){
//   			sum+=input_array[i];
//   		}
//    	}
//    	return sum;
// }

// let arr = [11, -2, 34, 45, 19, 6];

// console.log(getMaxSubSum(arr));
// console.assert(getMaxSubSum(arr) == 115);

//3 uzduotis 10-14

// Parašykite funkciją (nenaudojant "FOR" ciklo), kuri grąžina masyvą su pateiktu formatu:
// (3, 'a') => ['a', 'a', 'a']
// (4, 'b') => ['b', 'b', 'b', 'b']

// let customFill = (amount, symbol) =>{

// 	let main_array = [];
// 	while (amount>0){
// 		amount--;
// 		main_array[amount] = symbol;
// 	}
// 	return main_array;
// }

// console.log(customFill(3, 'a'));
// console.assert(customFill(3, 'a') == ['a', 'a', 'a']);
// console.log(customFill(4, 'b'));
// console.assert(customFill(4, 'b') == ['b', 'b', 'b', 'b']);

//4 uzduotis 10-14

// let isEqual = (array_1, array_2) =>{

// 	if(array_1.length == array_2.length){
// 	 	 	 for(let i = 0; i < array_1.length; i++){
// 	 	 	 	if(array_1[i]!=array_2[i]){
// 	 	 	 		return false;
// 	 	 	 	}
//  	 	 	 }
//  	 	 	 return true;
//  	 	 	}
//  	 else{
//  	 	return false;
//  	 }
// }
	


// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4];
// let arr3 = [1, 2, 3, 5];
// let arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2)); 
// console.assert(isEqual(arr1, arr2));
// console.log(isEqual(arr1, arr3)); 
// console.assert(isEqual(arr1, arr3) == false);
// console.log(isEqual(arr1, arr4)); 
// console.assert(isEqual(arr1, arr4) == false);
// console.log(isEqual(arr3, arr4)); 
// console.assert(isEqual(arr3, arr4) == false);
// console.log(isEqual(arr4, arr4)); 
// console.assert(isEqual(arr4, arr4));

//5 uzduotis 10-14

//Parašykite 2 skirtingas funkcijas, kurios apverčia masyvą atvirkštine tvarka.

//1 variantas

//   let reverseArray = (input_array) =>{

//   	for(let i = 0; i < (input_array.length-1)/2; i++){
//   		let buffer = input_array[i];
//   		input_array[i] = input_array[input_array.length-1-i];
//   		input_array[input_array.length-1-i] = buffer;

//   		}
//   	return input_array;
//   }

 //2 variantas

//  let reverseArray = input_array => input_array.reverse();



//  let data = [1, 2, 3, 4];
// console.log(reverseArray(data));
// console.assert(JSON.stringify(reverseArray(data)) == JSON.stringify([4, 3, 2, 1]));
 
// console.log(reverse2(data));
// console.assert(JSON.stringify(reverse2(data)) == JSON.stringify([4, 3, 2, 1]));
 
// console.log(reverse2(data));
// console.assert(JSON.stringify(reverse2(data)) == JSON.stringify([4, 3, 2, 1]))


//6 uzduotis 10-14


//1 variantas

// let cleanArray = (input_array) =>{

// let sorted_array = [];
// let sorted_array_index = 0;

// 	for(let i = 0; i < input_array.length; i++){
// 		if(typeof(input_array[i])=='number'){
// 			sorted_array[sorted_array_index] = input_array[i];
// 			sorted_array_index++;
// 		}
// 	}
// 	return sorted_array;
// }

// //2 variantas

// let cleanArray = (input_array) => input_array.filter(type => typeof(type) =='number');

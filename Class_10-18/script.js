// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;

console.log(`1 užduotis:\n`)

let arrDoubled = input_array => input_array.map(item => item * 2);

console.log(arrDoubled(numbers));

// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus

console.log(`2 užduotis:\n`)

let arrMultiplied = (input_array, multiplier) => input_array.map(item => item * multiplier);

console.log(arrMultiplied(numbers, 5));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve

console.log(`3 užduotis:\n`)

let arrCountTwos = (input_array) => input_array.filter(item => item == 2).length;

console.log(arrCountTwos(numbers));

// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

console.log(`4 užduotis:\n`)

let arrIndexOfFirst = (input_array, argument) => input_array.indexOf(argument);

console.log(arrIndexOfFirst(numbers, 7));

// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

console.log(`5 užduotis:\n`)

let arrIndexOfLast = (input_array, argument) => input_array.lastIndexOf(argument);

console.log(arrIndexOfLast(numbers, 2));

// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

console.log(`6 užduotis:\n`)

let reverseNumbers = (input_array) => input_array.reverse();

console.log(reverseNumbers(numbers));

// 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

console.log(`7 užduotis:\n`)

let findLowHigh = (input_array) => console.log(`Mažiausias: ${input_array.sort((a, b) => a-b)[0]} Didžiausias: ${input_array.sort((a, b) => a-b)[input_array.length-1]}`);

findLowHigh(numbers);

// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.

console.log(`8 užduotis:\n`)

let checkForLetters = (sentence, letter) => sentence.split('').filter(item => item == letter).length;

console.log(checkForLetters('Darkness imprisoning me all that I see absolute horror', 's'));

// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
//   let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];

console.log(`9 užduotis:\n`)
let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", , 10, 1];
let createSortedArray = (input_array) => input_array.filter(item => typeof(item) == 'number').sort((a, b) => a - b);

console.log(createSortedArray(arr2));

// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

console.log(`10 užduotis:\n`)
let checkIfAllSmaller = (input_array, maximum_value) => {

    for (let i = 0; i < input_array.length; i++) {
        if (maximum_value > input_array[i]) {
            return false;
        }
    }
    return true;
}

let arr1 = [2, 7, 6, 9, 5];
console.log(checkIfAllSmaller(arr1, 5));

// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
console.log(`11 užduotis:\n`)
let citiesOfLithuania = [
    'Vilnius',
    'Kaunas',
    'Klaipėda',
    'Šiauliai',
    'Panevėžys',
    'Alytus',
    'Marijampolė',
    'Mažeikiai',
    'Jonava',
    'Utena',
];

let filteredByLetter = (input_array, letter) => {

    let filteredArray = [];

    input_array.forEach(item => {

        item.split('').some(item => item == letter) ? filteredArray.push(item) : null;

    });
    return filteredArray;
}

console.log(filteredByLetter(citiesOfLithuania, 'i'));

// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()

// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip string pvz. “substraction”). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.

console.log(`12 užduotis:\n`)
let addition = (number_1, number_2) => number_1 + number_2;
let subtraction = (number_1, number_2) => number_1 - number_2;
let multiplication = (number_1, number_2) => number_1 * number_2;
let division = (number_1, number_2) => number_1 / number_2;

let calculateValue = (number_1, number_2, action) => {

    switch (action) {
        case 'addition':
            return addition(number_1, number_2);
            break;
        case 'subtraction':
            return subtraction(number_1, number_2);
            break;
        case 'multiplication':
            return multiplication(number_1, number_2);
            break;
        case 'division':
            return division(number_1, number_2);
            break;
        default:
            console.log(alert('The action you entered is not viable'));
    }
}

console.log(calculateValue(1, 5, 'division'));
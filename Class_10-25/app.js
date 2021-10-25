// Turite HTML dokumentą, kuriame yra pateiktas vienas div su id=”main”.

// UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:

// <h2> tag’as su tekstu;
	
// <p> tag’as su tekstu;
	
// <ul> tag’as, kurio viduje yra 5 <li> su paveiksliukais;
	
// <p> tag’as su tekstu.

	let div = document.querySelector('#main');
	console.log(div);

	let text_h2 = 'grybas';
	let text_p = 'karta grybas isejo pasivaikscioti';
	let text_p_2 = 'ir pamate dideli vora';

    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let ul = document.createElement('ul');
    let p_2 = document.createElement('p');


    let text_h2_textNode = document.createTextNode(text_h2);
    let text_p_textNode = document.createTextNode(text_p);
    let text_p_2_textNode = document.createTextNode(text_p_2);


    h2.appendChild(text_h2_textNode);
    p.appendChild(text_p_textNode);



    p_2.appendChild(text_p_2_textNode);

for (let i = 0; i < 5; i++) {

    let li = document.createElement('li');

    let img = document.createElement('img');
    img.src = 'https://www.w3schools.com/images/w3schools_logo_436_2.png';


    li.appendChild(img);
    ul.appendChild(li);
}

 	div.appendChild(h2);
 	div.appendChild(p);
	div.appendChild(ul);
	div.appendChild(p_2);

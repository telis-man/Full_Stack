// Turite HTML dokumentą, kuriame yra pateiktas vienas div su id=”main”.

// UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:

// <h2> tag’as su tekstu;
	
// <p> tag’as su tekstu;
	
// <ul> tag’as, kurio viduje yra 5 <li> su paveiksliukais;
	
// <p> tag’as su tekstu.

// 	let div = document.querySelector('#main');
// 	console.log(div);

// 	let text_h2 = 'grybas';
// 	let text_p = 'karta grybas isejo pasivaikscioti';
// 	let text_p_2 = 'ir pamate dideli vora';

//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//     let ul = document.createElement('ul');
//     let p_2 = document.createElement('p');


//     let text_h2_textNode = document.createTextNode(text_h2);
//     let text_p_textNode = document.createTextNode(text_p);
//     let text_p_2_textNode = document.createTextNode(text_p_2);


//     h2.appendChild(text_h2_textNode);
//     p.appendChild(text_p_textNode);



//     p_2.appendChild(text_p_2_textNode);

// for (let i = 0; i < 5; i++) {

//     let li = document.createElement('li');

//     let img = document.createElement('img');
//     img.src = 'https://www.w3schools.com/images/w3schools_logo_436_2.png';


//     li.appendChild(img);
//     ul.appendChild(li);
// }

//  	div.appendChild(h2);
//  	div.appendChild(p);
// 	div.appendChild(ul);
// 	div.appendChild(p_2);

//appendChild masyvo domo objekta ideda paskutine kazkokia reiksme.

// Sukurkite HTML dokumentą, kuris <body> dalyje turės tris žymas, t.y. <header>, <main>, <footer>. 
    
// <header> dalyje bus navigacijos meniu su 5 nuorodomis, kuris bus “Responsive” (mobilioje versjoje turi būti “toggler” mygtukas, kurį paspaudus atsiranda meniu).
    
// <main> dalyje bus trys <section>:
    
// Pirmas <section> turės pilno pločio ir aukčio “slider” foną, kuriame bus trys paveikslėliai, kurie keisis kas 2 sekundės;
    
// Antras <section> turės pilno pločio ir ne mažesnę nei 300px aukščio laikrodį (laikas rodomas kaip tekstas), kuriame bus matomos dabartinės valandos, minutės ir sekundės (atsinaujins realiu laiku); 
    
// Trečias <section> turės kontaktų formą, kurią užpildžius, po ja pasirodys žinutė, kurioje nurodoma, kad forma užpildyta sėkmingai.

    //nnnnnnnnn 

    // let text_h2 = 'grybas';

    // let h2 = document.createElement('h2');
    // let text_h2_textNode = document.createTextNode(text_h2);
    // h2.appendChild(text_h2_textNode);
  //  document.body.appendChild(h2);

document.body.style.fontFamily  = 'Comfortaa,cursive';

//HEADERIS
    let header = document.createElement('header');
    document.body.appendChild(header);

    let ul = document.createElement('ul');
    ul.setAttribute('class', 'nav_bar');      

    let nav_array = ['HOME', 'NEW RELEASES', 'MEN','WOMEN','KIDS','ABOUT US'];

    for (let i = 0; i < 5; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        let a_textNode = document.createTextNode(nav_array[i]);
        a.href = '';
        a.appendChild(a_textNode);
        a.setAttribute('class', 'nav_bar_elements'); 
        

        li.appendChild(a);
        ul.appendChild(li);
    }

    header.appendChild(ul);

    document.body.appendChild(header);


//STYLES

let nav_bar = document.getElementsByClassName('nav_bar')[0];
let nav_bar_elements = document.getElementsByClassName('nav_bar_elements');
    
    let changeMediaQueries = (screen_size, nav_bar, nav_bar_elements) =>{

      if (screen_size.matches) {                         // Mobile
        document.body.style.backgroundColor = "yellow";
        nav_bar.style.display = 'none';
      } else {                                          // Desktop
        //nav-bar styling 
        document.body.style.backgroundColor = "red";                                  
        nav_bar.style.display = 'flex';
        nav_bar.style.justifyContent = 'center';
        nav_bar.style.listStyleType = 'none';
        //nav-bar elements styling
        for (let i = 0; i < nav_bar_elements.length; i++) {
            nav_bar_elements[i].style.padding = '10px';
            nav_bar_elements[i].style.textDecoration = 'none';
            nav_bar_elements[i].style.color = 'black';
            nav_bar_elements[i].style.fontSize = '20px';
        }
      }

    }

let screen_size = window.matchMedia("(max-width: 700px)");

changeMediaQueries(screen_size, nav_bar, nav_bar_elements); // Call listener function at run time

screen_size.addListener(changeMediaQueries) // Attach listener function on state changes
//HEADERIS

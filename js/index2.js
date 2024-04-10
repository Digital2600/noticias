console.log("Hola Genio Ale");
console.info("Ale Genio");

const aplicacion = document.querySelector(".container");



//const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=VYYGK6814T8BCRCE';
//Welcome to Alpha Vantage! Your API key is: WA1PBI9WFC3TXN9S. Please record this API key at a safe place for future data access.

// esta funciona //const url = "https://newsdata.io/api/1/news?language=es&country=ar&apikey=pub_4128311e7d22453e917c0d9cb72cc14fca933&q=argentina" 

//const url = "https://google-news13.p.rapidapi.com/world?lr=en-US";

const url = "https://newsdata.io/api/1/news?apikey=pub_4128311e7d22453e917c0d9cb72cc14fca933&q=argentina&country=ar&language=es&category=politics"

 //var url = 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2024-04-09&' +
//           'sortBy=popularity&' +
//           'apiKey=d7e3b9c6c92347daab50071c7cb9ae34';
// 

https://newsdata.io/api/1/news?apikey=pub_4128311e7d22453e917c0d9cb72cc14fca933&q=argentina&country=ar&language=es&category=politics

fetch(url)
.then(response => response.json())
.then(data => {

    var titulo1=  document.getElementById('titulo1')
    var pais1 = document.getElementById('pais1')
    var descripcion1 = document.getElementById('descripcion1')
    var imagen1 = document.getElementById('imagen1')
    var link1 = document.getElementById('link1')
    
    titulo1.innerHTML = `<p>${data.results[0].title}</p>`
    pais1.innerHTML = `<p>${data.results[0].country}</p>`
    descripcion1.innerHTML = `<p>${data.results[0].description}</p>`
    imagen1.innerHTML = `<img src=${data.results[0].image_url} width="600" height=auto>`
    link1.innerHTML = `<p>${data.results[0].link}`



    var titulo2 =document.getElementById('titulo2')
    var pais2 = document.getElementById('pais2')
    var descripcion2 = document.getElementById('descripcion2')
    var imagen2 = document.getElementById('imagen2')
    var link2 = document.getElementById('link2')


    titulo2.innerHTML = `<p>${data.results[1].title}</p>`
    pais2.innerHTML = `<p>${data.results[1].country}</p>`
    descripcion2.innerHTML =`<p>${data.results[1].description}</p>`
    imagen2.innerHTML = `<img src=${data.results[1].image_url} width="600" height=auto>`
    link2.innerHTML = `<p>${data.results[1].link}`



    var titulo3 = document.getElementById('titulo3')
    var pais3= document.getElementById('pais3')
    var descripcion3 = document.getElementById('descripcion3')
    var imagen3 = document.getElementById('imagen3')
    var link3 = document.getElementById('link3')

    titulo3.innerHTML = `<p>${data.results[2].title}</p>`
    pais3.innerHTML = `<p>${data.results[2].country}</p>`
    descripcion3.innerHTML = `<p>${data.results[2].description}</p>`
    imagen3.innerHTML = `<img src=${data.results[2].image_url} width="600" height=auto>`
    link3.innerHTML = `<p>${data.results[2].link}`


    var titulo4 = document.getElementById('titulo4')
    var pais4= document.getElementById('pais4')
    var descripcion4 = document.getElementById('descripcion4')
    var imagen4 = document.getElementById('imagen4')
    var link4 = document.getElementById('link4')

    titulo4.innerHTML = `<p>${data.results[3].title}</p>`
    pais4.innerHTML = `<p>${data.results[3].country}</p>`
    descripcion4.innerHTML = `<p>${data.results[3].description}</p>`
    imagen4.innerHTML = `<img src=${data.results[3].image_url} width="600" height=auto>`
    link4.innerHTML = `<p>${data.results[3].link}`


    var titulo5 = document.getElementById('titulo5')
    var pais5= document.getElementById('pais5')
    var descripcion5 = document.getElementById('descripcion5')
    var imagen5 = document.getElementById('imagen5')
    var link5 = document.getElementById('link5')

    titulo5.innerHTML = `<p>${data.results[4].title}</p>`
    pais5.innerHTML = `<p>${data.results[4].country}</p>`
    descripcion5.innerHTML = `<p>${data.results[4].description}</p>`
    imagen5.innerHTML = `<img src=${data.results[4].image_url} width="600" height=auto>`
    link5.innerHTML = `<p>${data.results[4].link}`

    var titulo6 = document.getElementById('titulo6')
    var pais6= document.getElementById('pais6')
    var descripcion6 = document.getElementById('descripcion6')
    var imagen6 = document.getElementById('imagen6')
    var link6 = document.getElementById('link6')



    titulo6.innerHTML = `<p>${data.results[5].title}</p>`
    pais6.innerHTML = `<p>${data.results[5].country}</p>`
    descripcion6.innerHTML = `<p>${data.results[5].description}</p>`
    imagen6.innerHTML = `<img src=${data.results[5].image_url}width="600" height=auto>`
    link6.innerHTML = `<p>${data.results[5].link}`


    






    console.log(data)
    
})

.catch(error => console.log(error))



// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     const p = document.createElement('p')

//     p.innerHTML = JSON.stringify(data, null, 2);
//     document.body.appendChild(p); // Cambié 'aplicacion' por 'document.body' para poder visualizarlo en el cuerpo del documento.

//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });



/*document.addEventListener('DOMContentLoaded', function()  {
    const fechaYHoraElemento = document.getElementById('fechaYHora');
    const fechaYHoraActual = new Date();
    fechaYHoraElemento.textContent = `${fechaYHoraActual}`;
}); */
document.html;
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

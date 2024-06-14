console.log("Hola Genio Ale");
console.info("Ale Genio");

const aplicacion = document.querySelector(".container");




 //esta funciona 
 const url = "https://newsdata.io/api/1/news?language=es&country=ar&apikey=pub_4128311e7d22453e917c0d9cb72cc14fca933&q=argentina" 







fetch(url)
.then(response => response.json())
.then(data => {

    console.log(data)

    var titulo1=  document.getElementById('titulo1')
    var descripcion1 = document.getElementById('descripcion1')
    var imagen1 = document.getElementById('imagen1')
    var link1 = document.getElementById('link1')
    
    
    titulo1.innerHTML = `<p>${data.results[0].title}</p>`
    if (data.results[0].description !== null){ descripcion1.innerHTML = `<p>${data.results[0].description}</p>`}
    if (data.results[0].image_url !==null){imagen1.innerHTML = `<img src=${data.results[0].image_url} width="600" height=auto>`}
    link1.innerHTML = `<p>${data.results[0].link}`



    var titulo2 =document.getElementById('titulo2')
    var descripcion2 = document.getElementById('descripcion2')
    var imagen2 = document.getElementById('imagen2')
    var link2 = document.getElementById('link2')


    titulo2.innerHTML = `<p>${data.results[1].title}</p>`
    if (data.results[1].description !== null){descripcion2.innerHTML =`<p>${data.results[1].description}</p>`}
    if (data.results[1].image_url !==null){imagen2.innerHTML = `<img src=${data.results[1].image_url} width="600" height=auto>`}
    link2.innerHTML = `<p>${data.results[1].link}`


    var titulo3 = document.getElementById('titulo3')
    var descripcion3 = document.getElementById('descripcion3')
    var imagen3 = document.getElementById('imagen3')
    var link3 = document.getElementById('link3')

    titulo3.innerHTML = `<p>${data.results[2].title}</p>`
    if (data.results[2].description !== null){descripcion3.innerHTML = `<p>${data.results[2].description}</p>`}
    if (data.results[2].image_url !==null){imagen3.innerHTML = `<img src=${data.results[2].image_url} width="600" height=auto>`}
    link3.innerHTML = `<p>${data.results[2].link}`


    var titulo4 = document.getElementById('titulo4')
    var descripcion4 = document.getElementById('descripcion4')
    var imagen4 = document.getElementById('imagen4')
    var link4 = document.getElementById('link4')

    titulo4.innerHTML = `<p>${data.results[3].title}</p>`
    if (data.results[3].description !== null){descripcion4.innerHTML = `<p>${data.results[3].description}</p>`}
    if (data.results[3].image_url !==null){imagen4.innerHTML = `<img src=${data.results[3].image_url} width="600" height=auto>`}
    link4.innerHTML = `<p>${data.results[3].link}`


    var titulo5 = document.getElementById('titulo5')
    var descripcion5 = document.getElementById('descripcion5')
    var imagen5 = document.getElementById('imagen5')
    var link5 = document.getElementById('link5')

    titulo5.innerHTML = `<p>${data.results[4].title}</p>`
    if (data.results[4].description !== null){descripcion5.innerHTML = `<p>${data.results[4].description}</p>`}
    if (data.results[4].image_url !==null){imagen5.innerHTML = `<img src=${data.results[4].image_url} width="600" height=auto>`}
    link5.innerHTML = `<p>${data.results[4].link}`

    var titulo6 = document.getElementById('titulo6')
    var descripcion6 = document.getElementById('descripcion6')
    var imagen6 = document.getElementById('imagen6')
    var link6 = document.getElementById('link6')



    titulo6.innerHTML = `<p>${data.results[5].title}</p>`
    if (data.results[5].description !== null){descripcion6.innerHTML = `<p>${data.results[5].description}</p>`}
    if (data.results[5].image_url !==null){imagen6.innerHTML = `<img src=${data.results[5].image_url}width="600" height=auto>`}
    link6.innerHTML = `<p>${data.results[5].link}`


    var titulo7 = document.getElementById('titulo7')
    var descripcion7 = document.getElementById('descripcion7')
    var imagen7 = document.getElementById('imagen7')
    var link7 = document.getElementById('link7')



    titulo7.innerHTML = `<p>${data.results[6].title}</p>`
    if (data.results[6].description !== null){descripcion7.innerHTML = `<p>${data.results[6].description}</p>`}
    if (data.results[6].image_url !==null){imagen7.innerHTML = `<img src=${data.results[6].image_url}width="600" height=auto>`}
    link7.innerHTML = `<p>${data.results[6].link}`



    var titulo8 = document.getElementById('titulo8')
    var descripcion8 = document.getElementById('descripcion8')
    var imagen8 = document.getElementById('imagen8')
    var link8 = document.getElementById('link8')

   titulo8.innerHTML = `<p>${data.results[7].title}</p>`
    if (data.results[7].description !== null){descripcion8.innerHTML = `<p>${data.results[7].description}</p>`}
    if (data.results[7].image_url !==null){imagen8.innerHTML = `<img src=${data.results[7].image_url}width="600" height=auto>`}
    link8.innerHTML = `<p>${data.results[7].link}`


    // var titulo9 = document.getElementById('titulo9')
    // var descripcion9 = document.getElementById('descripcion9')
    // var imagen9 = document.getElementById('imagen9')
    // var link9 = document.getElementById('link9')



    // titulo9.innerHTML = `<p>${data.results[8].title}</p>`
    // if (data.results[8].description !== null){descripcion9.innerHTML = `<p>${data.results[8].description}</p>`}
    // if (data.results[8].image_url !==null){imagen9.innerHTML = `<img src=${data.results[8].image_url}width="600" height=auto>`}
    // link9.innerHTML = `<p>${data.results[8].link}`

    // var titulo10 = document.getElementById('titulo10')
    // var descripcion10 = document.getElementById('descripcion10')
    // var imagen10 = document.getElementById('imagen10')
    // var link10 = document.getElementById('link10')

    // titulo10.innerHTML = `<p>${data.results[9].title}</p>`
    // if (data.results[9].description !== null){descripcion10.innerHTML = `<p>${data.results[9].description}</p>`}
    // if (data.results[9].image_url !==null){imagen10.innerHTML = `<img src=${data.results[9].image_url}width="600" height=auto>`}
    // link10.innerHTML = `<p>${data.results[9].link}`

    // var titulo11 = document.getElementById('titulo11')
    // var descripcion11 = document.getElementById('descripcion11')
    // var imagen11 = document.getElementById('imagen11')
    // var link11 = document.getElementById('link11')

    // titulo11.innerHTML = `<p>${data.results[10].title}</p>`
    // if (data.results[10].description !== null){descripcion11.innerHTML = `<p>${data.results[10].description}</p>`}
    // if (data.results[10].image_url !==null){imagen11.innerHTML = `<img src=${data.results[10].image_url}width="600" height=auto>`}
    // link11.innerHTML = `<p>${data.results[10].link}`
   
    // var titulo12 = document.getElementById('titulo12')
    // var descripcion12 = document.getElementById('descripcion12')
    // var imagen12 = document.getElementById('imagen12')
    // var link12 = document.getElementById('link12')

    // titulo12.innerHTML = `<p>${data.results[10].title}</p>`
    // if (data.results[11].description !== null){descripcion12.innerHTML = `<p>${data.results[11].description}</p>`}
    // if (data.results[11].image_url !==null){imagen12.innerHTML = `<img src=${data.results[11].image_url}width="600" height=auto>`}
    // link12.innerHTML = `<p>${data.results[11].link}`



    console.log(data)
    
})

.catch(error => console.log(error))











/*document.addEventListener('DOMContentLoaded', function()  {
    const fechaYHoraElemento = document.getElementById('fechaYHora');
    const fechaYHoraActual = new Date();
    fechaYHoraElemento.textContent = `${fechaYHoraActual}`;
}); */
//document.html;
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

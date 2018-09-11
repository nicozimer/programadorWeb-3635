// Acceso a los nodos por Id

{
  /* <h1 id="main-title"></h1> */
}

var tittleNode = document.getElementById('main-title')

tittleNode.innerHTML = 'Titulo desde Javascript'

// Acceso a los nodos por Class

{
  /* <p class="paragraph"></p>
<p class="paragraph"></p>
<p class="paragraph"></p> */
}

var pNotes = document.getElementsByClassName('paragraph')

pNotes[0].innerHTML = 'Parrafo 1 en Javascrip'
pNotes[1].innerHTML = 'Parrafo 2 en Javascrip'
pNotes[2].innerHTML = 'Parrafo 3 en Javascrip'

// Crear un elemento o etiqueta html y cambiar el contenido de un elemento

var paragraphNode = document.createElement('div')

paragraphNode.innerHTML = '<p>Soy un párrafo</p>'

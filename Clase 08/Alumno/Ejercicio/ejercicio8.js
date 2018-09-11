var listNode = document.getElementById('mainList')

var texts = [ 'Ed', 'Edd', 'Eddy' ]

var personajes

for (var i = 0; i < texts.length; i++) {
  personajes = texts[i]

  var textNodeLi = document.createElement('li')

  textNodeLi.innerHTML = personajes

  textNodeLi.className = 'list-group-item'

  listNode.appendChild(textNodeLi)
}

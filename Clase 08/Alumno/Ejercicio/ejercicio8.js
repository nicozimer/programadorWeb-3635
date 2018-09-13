var listNode = document.getElementById('mainList')

var texts = [ 'Ed', 'Edd', 'Eddy' ]

for (var i = 0; i < texts.length; i++) {
  var textNodeLi = document.createElement('li')

  textNodeLi.innerHTML = texts[i]

  textNodeLi.className = 'list-group-item'

  listNode.appendChild(textNodeLi)
}

setTimeout(function () {
  var titleNodo = document.getElementById('title')

  var textNodo = document.getElementById('text')

  var name = prompt('Ingresá tu nombre')

  var text = prompt('Ingresá un texto')

  titleNodo.innerHTML = 'Hola ' + name

  textNodo.innerHTML = text
}, 2000)

// # Mostrar un contandor en pantalla manejado por teclado

// Crear un contador que se vaya incrementando al presionar las flechas de arriba y abajo del teclado, siguiendo la siguiente lógica:
//    - Empezar en cero.
//    - Si el usuario presiona Enter tiene que empezar de nuevo.
//    - Sumar uno si el usuario presiona arriba.
//    - Restar uno si el usuario presiona abajo.

// > Códigos de letras

//    - Enter: 13
//    - Up: 38
//    - Down: 40

var titleNode = $('h1')

var contador = 0

titleNode.html(contador)

$(window).keydown(function (event) {
  if (event.which === 40) {
    contador = contador - 1
  } else if (event.which === 38) {
    contador = contador + 1
  } else if (event.which === 13) {
    contador = 0
  }
  titleNode.html(contador)
})

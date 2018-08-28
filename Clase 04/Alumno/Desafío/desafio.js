var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

var name = prompt('Ingresá un nombre')

function nombres (studentsList, name) {
  var nameArray
  var surnameArray

  for (var i = 0; i < studentsList.length; i++) {
    nameArray = studentsList[i].firstName
    surnameArray = studentsList[i].lastName

    if (name === nameArray || name === surnameArray) {
      return i
    }
  }
  return -1
}

var result = nombres(studentsList, name)

if (result === -1) {
  console.log('No se pudo encontrar al estudiante')
} else {
  console.log('el nombre se encuentra en la posicion ' + result)
}

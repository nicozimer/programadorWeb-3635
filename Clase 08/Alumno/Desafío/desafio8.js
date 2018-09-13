var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

function createStudentNode (newStudent) {
  var liNode = document.createElement('li')
  liNode.id = newStudent.dni
  liNode.className = 'list-group-item'

  liNode.innerHTML =
    '<h3>' + newStudent.firstName + ' ' + newStudent.lastName + '</h3>'
  liNode.innerHTML = '<h4> DNI: ' + newStudent.dni + '</h4>'
  liNode.innerHTML = '<h4> E-Mail: ' + newStudent.email + '</h4>'

  return liNode
}

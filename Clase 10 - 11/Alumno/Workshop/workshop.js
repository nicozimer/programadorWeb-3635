console.log('Init app')

// Globales

var LOCAL_KEY = 'studentList'

// Carga inicial

var studentsList = getLocalList(LOCAL_KEY)

var mainListNode = document.getElementById('mainList')

var student

for (var i = 0; i < studentsList.length; i++) {
  student = createStudentNode(studentsList[i])

  mainListNode.appendChild(student)
}

function getLocalList (key) {
  // Valido que reciba un string
  if (typeof key === 'string') {
    // Trato de recuperar la lista del localStorage
    var localList = localStorage.getItem(key)
    if (localList) {
      // Si la lista existía la tranformo en JavaScript y la devuelvo
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      // Sino existía devuelvo un array vacío
      return []
    }
  }
}

function createStudentNode (newStudent) {
  // Creo el nodo li
  var liNode = document.createElement('li')

  // Le setteo el id al nodo
  liNode.id = newStudent.dni

  // Le setteo la clase al nodo
  liNode.className = 'list-group-item'

  // Le agrego el contenido al nodo
  liNode.innerHTML =
    '<h1>' +
    newStudent.firstName +
    ' ' +
    newStudent.lastName +
    '</h1>' +
    '<h3>DNI:' +
    newStudent.dni +
    '</h3><p class="pepe">E-mail:' +
    newStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}

// Validar los campos nombre y dni

var firstNameNode = document.getElementById('firstName')

firstNameNode.onblur = validateRequiredField

var dniNode = document.getElementById('dni')

dniNode.onblur = validateDniField

function validateRequiredField (event) {
  var inputNode = event.target

  if (!inputNode.value) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }

  validateSubmitButton()
}

function validateDniField (event) {
  var inputNode = event.target

  var parsedValue = parseInt(inputNode.value, 10)

  var index = searchStudentIndexByDni(inputNode.value, studentsList)

  if (isNaN(parsedValue) || parsedValue <= 0 || index > -1) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
  validateSubmitButton()
}

// Agregar el estudiante

var addStudentButtonNode = document.getElementById('addStudentButton')

addStudentButtonNode.onclick = addStudent

function addStudent () {
  var firstNameValue = firstNameNode.value
  var dniValue = dniNode.value

  var student = {
    firstName: firstNameValue,
    dni: dniValue
  }

  studentsList.push(student)

  setLocalList(LOCAL_KEY, studentsList)

  student = createStudentNode(student)

  mainListNode.appendChild(student)

  firstName.value = ''
  dniNode.value = ''
  addStudentButtonNode.disabled = true
  firstName.classList.remove('is-valid')
  dniNode.classList.remove('is-valid')
}
// function createStudentNode (newStudent) {
//   // Creo el nodo li
//   var liNode = document.createElement('li')

//   // Le setteo el id al nodo
//   liNode.id = newStudent.dni

//   // Le setteo la clase al nodo
//   liNode.className = 'list-group-item'

//   // Le agrego el contenido al nodo
//   liNode.innerHTML =
//     '<h1>' +
//     newStudent.firstName +
//     ' ' +
//     newStudent.lastName +
//     '</h1>' +
//     '<h3>DNI:' +
//     newStudent.dni +
//     '</h3><p class="pepe">E-mail:' +
//     newStudent.email +
//     '</p>'

//   // Devuelvo solo el nodo con todos sus datos
//   return liNode
// }

// Eliminar un Estudiante

var dniDeleteNode = document.getElementById('deleteDni')

dniDeleteNode.onblur = validateDniDelete

function validateDniDelete (event) {
  var deleteStudentButtonNode = document.getElementById('deleteStudentButton')
  var inputNode = event.target

  var index = searchStudentIndexByDni(inputNode.value, studentsList)

  if (index > -1) {
    deleteStudentButtonNode.disabled = false
  } else {
    deleteStudentButtonNode.disabled = true
  }
}

var deleteStudentButtonNode = document.getElementById('deleteStudentButton')

deleteStudentButtonNode.onclick = deleteStudent

function deleteStudent () {
  var deleteDniValue = dniDeleteNode.value

  var index = searchStudentIndexByDni(deleteDniValue, studentsList)

  // Elimino en la fuente de verdad
  studentsList.splice(index, 1)

  // Piso la lista del localStorage
  setLocalList(LOCAL_KEY, studentsList)

  // Busco en el dom el nodo y lo elimino de la lista
  var node = document.getElementById(deleteDniValue)

  mainListNode.removeChild(node)

  deleteDniNode.value = ''
  deleteStudentButtonNode.disabled = true

  console.log(studentsList)
}
function setLocalList (key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  }
}

function searchStudentIndexByDni (dni, studentsList) {
  var student

  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (dni === student.dni) {
      return i
    }
  }

  return -1
}

// Funciones auxiliares

function validateSubmitButton () {
  var addStudentButtonNode = document.getElementById('addStudentButton')
  var inputFields = document.getElementsByClassName('is-valid')

  if (inputFields.length === 2) {
    addStudentButtonNode.disabled = false
  } else {
    addStudentButtonNode.disabled = true
  }
}

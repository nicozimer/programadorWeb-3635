console.log('Init app')

// var savedUserName = localStorage.getItem('userName')

// if (!savedUserName) {
//   savedUserName = prompt('Ingresá tu nombre')

//   localStorage.setItem('userName', savedUserName)
// }

// var logout = prompt('Querés desloguear si o no?')

// if (logout === 'si') {
//   localStorage.removeItem('userName')
// }

// console.log('Hola ' + savedUserName)

// var firstName = prompt('Ingresá tu nombre')

// localStorage.setItem('userName', firstName)

// if (firstName) {
//   console.log('Hola ' + firstName)
// }

var cars = [
  {
    model: 'Ferrari F50',
    brand: 'Ferrari'
  },
  {
    model: 'Fiat 500',
    brand: 'Fiat'
  }
]

localStorage.setItem('carsList', cars)

var savedCars = localStorage.getItem('carsList')

console.log(savedCars)

// var savedAuth = localStorage.getItem('auth')

// if (!savedAuth) {
//   var userName = prompt('Ingresá tu usuario')
//   var password = prompt('Ingresá tu contraseña')

//   var auth = {
//     userName: userName,
//     password: password
//   }

//   var stringyAuth = JSON.stringify(auth)

//   localStorage.setItem('auth', stringyAuth)
// } else {
//   var parsedAuth = JSON.parse(savedAuth)

//   var passwordCheck = prompt('Ingresá tu contraseña como está guardada')

//   if (parsedAuth.password === passwordCheck) {
//     console.log('Contraseña correcta')
//   }
// }

// console.log('Estas logueado')

// var savedUserSetting = localStorage.getItem('userSettings')

// if (!savedUserSetting) {
//   var firstName = prompt('Ingresa tu nombre')

//   var language = prompt('Ingresa tu idioma')

//   var userSettings = {
//     firstName: firstName,
//     language: language
//   }

//   var stringifyUserSetting = JSON.stringify(userSettings)

//   localStorage.setItem('userSettings', stringifyUserSetting)
// } else {
//   var parsedUserSettings = JSON.parse(savedUserSetting)

//   switch (parsedUserSettings.language) {
//     case 'ES':
//       console.log('Hola ' + parsedUserSettings.firstName)
//       break
//     case 'PT':
//       console.log('Oi ' + parsedUserSettings.firstName)
//       break
//     default:
//       console.log('Hello ' + parsedUserSettings.firstName)
//       break
//   }
// }

// var userSettings = {
//   firstName: firstName,
//   language: language
// }

// if (!userSettings) {
//   var pepe = 'Hola'
//   return 'No existe el usuario'
// }

// if (!userSettings.language)

// if (!userSettings.firstName) return 'No existe el nombre'

// return 'Existe todo el usuario'

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

function setLocalList (key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  }
}

var savedList = getLocalList('list')

var firstName = prompt('Ingresá tu nombre')

var lastName = prompt('Ingresá tu apellido')

var studentObj = {
  firstName: firstName,
  lastName: lastName
}

savedList.push(studentObj)

setLocalList('list', savedList)

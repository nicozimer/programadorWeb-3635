// var nombres = [ 'Juan', 'Pedro', 'María' ]

// sessionStorage.setItem('List', nombres)

// localStorage.setItem('List', nombres)

// var obj = {
//     firstName: 'Adrián',
//     lastName: 'Ferré',
//     age: 29
//   }
  
//   var stringifiedObj = JSON.stringify(obj)
  
//   console.log(stringifiedObj)

//   var obj = {
//     firstName: 'Adrián',
//     lastName: 'Ferré',
//     age: 29
//   }
  
//   var stringifiedObj = JSON.stringify(obj)
  
//   var parsedObj = JSON.parse(stringifiedObj)
  
//   console.log(parsedObj)

console.log('hola')

var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']

function saveArray (key,array) {
    if (typeof key === 'string' && Array.isArray(array)) {
        var stringifiedArray = JSON.stringify(array)
        localStorage.setItem(key, stringifiedArray)
    }
    
}

saveArray('students',testList)
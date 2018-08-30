function Students (firstName, lastName, dni, email) {
  this.firstName
  this.lastName
  this.dni
  this.email

  var id = Math.random()

  this.getID = function () {
    return id
  }

  this.getFullName = function () {
    if (firstName && lastName) {
      return firstName + ' ' + lastName
    } else if (!firstName&& lastName) {
      return lastName
    } else if (firstName && !lastName) {
      return firstName
    } else if (!firstName&&!lastName) {
      return ''
    }
  }
}

var newStudent1 = new Students('Juan', 'Perez', 45678987, 'juan@gmail.com')

var newStudent2 = new Students('Ana', 'Fernandez', 45678989, 'ana@gmail.com')

var newStudent3 = new Students('Pedro', 'Marmol', 45678956, 'pedro@gmail.com')

console.log(newStudent1.getFullName())
console.log(newStudent1.getID())

console.log(newStudent2.getFullName())
console.log(newStudent2.getID())

console.log(newStudent3.getFullName())
console.log(newStudent3.getID())

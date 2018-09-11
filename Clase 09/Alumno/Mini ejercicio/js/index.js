var submitButton = document.getElementById('button')

submitButton.onclick = validateAge

function validateAge () {
  var ageNode = document.getElementById('age')

  var value = ageNode.value

  parseValue = parseInt(value, 10)

  if (parseValue < 18) {
    console.log('Menor de edad')
  } else {
    console.log('Mayor de edad')
  }
}

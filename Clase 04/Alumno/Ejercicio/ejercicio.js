
var results = [7, 5, 6, 4, 3, 2, 8]


function promedios(examResults) {

  var numbers = 0

  for (var i = 0; i < examResults.length; i++) {

    numbers = numbers + examResults[i]

  }

  return numbers / examResults.length

}

var result = promedios(results)

console.log(result)

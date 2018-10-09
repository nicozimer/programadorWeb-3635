function getData (url, cbk) {
  $.ajax(url)
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })
}

getData('https://swapi.co/api/people/', showPeople)

function showPeople (error, data) {
  if (error) {
    console.log('Falló algo ', error)
  } else {
    var personajes = data.results

    var personaje

    for (var i = 0; i < personajes.length; i++) {
      personaje = personajes[i]

      console.log(personaje.name)
    }
  }
}

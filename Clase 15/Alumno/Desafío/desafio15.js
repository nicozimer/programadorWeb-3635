$(document).ready(function () {
  var AjaxCall = $.ajax('https://swapi.co/api/people/')
    .done(function (data) {
      console.log('Los personajes son', data)
    })
    .fail(function (error) {
      console.log('Falló algo ', error)
    })
})

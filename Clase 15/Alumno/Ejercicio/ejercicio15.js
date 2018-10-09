$(document).ready(function () {
  console.log('Ya carga')
  var AjaxCall = $.ajax('https://swapi.co/api/people/')
    .done(function (data) {
      console.log('Aca estan los datos ', data)
    })
    .fail(function (error) {
      console.log('Falló algo ', error)
    })
})

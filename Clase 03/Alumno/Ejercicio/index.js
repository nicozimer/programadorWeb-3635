
var daysOfTheWeek = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato'
  ]

  var dia 

  for (var i = 0; i < daysOfTheWeek.length; i++) {
    
    dia = daysOfTheWeek[i]
  
    switch (dia) {
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
        console.log(dia + " es un dia de semana")

        break
        case "Sabado":
        case "Domingo":
        console.log(dia + " es fin de semana")

        break
        default: console.log(dia + " no es valido")


    }

  }


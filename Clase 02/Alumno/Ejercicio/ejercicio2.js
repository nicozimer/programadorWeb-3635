var dia = prompt ('Ingresa el dia de la semana')

switch (dia) {
    case 'Lunes':
    case 'Martes':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
    console.log(dia +' es un dia habil')
    break 
    case 'Sabado':
    case 'Domingo':
    console.log(dia + ' es fin de semana')
    break
    default:
      console.log('Dia incorrecto')
      

}
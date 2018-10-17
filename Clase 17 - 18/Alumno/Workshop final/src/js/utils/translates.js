function genderTranslate (gender) {
  switch (gender) {
    case 'male':
      return 'Masculino'
      break
    case 'female':
      return 'Femenino'
      break
    case 'n/a':
      return 'n/a'
      break
    default:
      return gender
      break
  }
}
var TRANSLATES = {
  ES: {
    blue: 'Azules',
    yellow: 'Amarillos',
    red: 'Rojos',
    brown: 'Marrones',
    grey: 'Grises',
    black: 'Negros',
    orange: 'Naranjas',
    hazel: 'Miel',
    pink: 'Rosados',
    unknown: 'No se sabe',
    gold: 'Dorados',
    'blue-gray': 'Grisaceos',
    'red, blue': 'Rojo y Azul'
  }
}
function eyeTranslate (lang, eyeColor) {
  return TRANSLATES[lang][eyeColor] || eyeColor
}

export { genderTranslate, eyeTranslate }



var operation = prompt ('Ingrese la operacion a realizar')

var number = prompt ('Ingrese un numero')


do{
    number2 = prompt ('Ingrese otro numero')
  
  }while(operation === 'division' && number2 === '0')

var parsedNumber = parseInt (number, 10)

var parsedNumber2 = parseInt (number2, 10)

  switch (operation) {
      case 'suma':
      console.log(parsedNumber + parsedNumber2)
      break

      case 'resta':
      console.log(parsedNumber - parsedNumber2)
      break 

      case 'multiplicacion':
      console.log(parsedNumber * parsedNumber2)
      break

      case 'division':
      console.log(parsedNumber / parsedNumber2)
      break

  }
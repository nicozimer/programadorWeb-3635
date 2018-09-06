var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']

localStorage.setItem('userName', testList)

if (Array.isArray(testList){
  
  var savedUserNames = localStorage.getItem('userName')

  var stringifyUsernames = JSON.stringify(savedUserNames)

  localStorage.setItem('userName', stringifyUsernames)

  } else {
    var nameList = []
  }

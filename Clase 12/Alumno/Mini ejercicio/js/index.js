var textNode = $('#firstName')

textNode.blur(validateField)

function validateField (event) {
  var inputNode = $(event.target)
  var liNodes = $('.list-group-item')

  var value = inputNode.val()

  liNodes.html(firstName)
}

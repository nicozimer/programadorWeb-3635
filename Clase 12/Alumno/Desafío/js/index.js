var mailNode = $('#email')

mailNode.blur(validateMail)

function validateMail () {
  var inputNode = $(this)

  var value = inputNode.val()

  if (!value || value.indexOf('@') === -1 || value.indexOf('.') === -1) {
    inputNode.addClass('is-invalid')
    inputNode.removeClass('is-valid')
  } else {
    inputNode.addClass('is-valid')
    inputNode.removeClass('is-invalid')
  }
}

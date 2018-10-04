var userNameNode = $('#userName')

  userNameNode.one('blur', validateUserName)

  function validateUserName (event) {
    var inputNode = $(this)

    var value = inputNode.val()

    inputNode.next().remove()

    if (!value) {
      inputNode.removeClass('is-valid')
      inputNode.addClass('is-invalid')
    } else {
      inputNode.removeClass('is-invalid')
      inputNode.addClass('is-valid')
    }
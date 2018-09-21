var square = $('.square')

square.click(x)

var player = true

function x () {
  var play = $(this)
  if (player) {
    play.addClass('circle')
    player = false
  } else {
    play.addClass('cross')
    player = true
  }
}

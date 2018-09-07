function search (key) {
  if (typeof key === 'string') {
    var key = localStorage.getItem(key)
    if (!key) {
      return []
    } else {
      var parsedKey = JSON.parse(key)
      return parsedKey
    }
  }
}

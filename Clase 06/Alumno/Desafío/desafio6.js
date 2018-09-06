function search(text1,text2) {
    var text1Upper = text1.toUpperCase()
    var text2Upper = text2.toUpperCase()

    if (text2Upper.indexOf(text1Upper)!==-1) {
        return true
    } else {
        return false
    }
}

console.log(search('pa','patricia'))

console.log(search('patricia','pa'))

console.log(search('2','pa'))


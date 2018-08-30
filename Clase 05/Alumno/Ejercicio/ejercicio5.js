function Car (model, brand, year) {
  this.model = model
  this.brand = brand
  this.year = year

  var id = Math.random()

  this.getCarName = function () {
    return this.model + ' - ' + this.brand + ' - ' + this.year
  }
}

var cars = new Car('Suran', 'volkswagen', 2015)

console.log(cars.getCarName())

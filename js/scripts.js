function Phone(brand, price, color, weight) {
	this.brand = brand;
	this.price = price;
	this.color = color;
    this.weight = weight;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " and weight is " + this.weight + " grams "+".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", 500);
var SamsungS6 = new Phone("Samsung", 1250, "red", 600);
var OnePlusOne = new Phone("ONePlusOne", 3250, "black", 405);

iPhone6S.printInfo();
SamsungS6.printInfo();
OnePlusOne.printInfo();
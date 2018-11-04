function Vector(x, y) {
    this.x = x;
    this.y = y;
    this.plus = function(newArray) {
        newX = this.x + newArray.x;
        newY = this.y + newArray.y;
        newVector = new Vector(newX, newY);
        return newVector;
    }
    this.minus = function(newArray) {
        newX = this.x - newArray.x;
        newY = this.y - newArray.y;
        newVector = new Vector(newX, newY);
        return newVector;
    }
    this.length = function() {
        return Math.sqrt(this.x**2 + this.y**2);
    }
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
myVector = new Vector(3, 4);
console.log(myVector.length());

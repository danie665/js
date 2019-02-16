function Vector(x, y) {
    this.x = x;
    this.y = y;
    this.plus = function(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }
}

function Grid(width, height) {
    this.space = [];
    i = 0;
    while (i < height) {
        row = [];
        j = 0;
        while (j < width) {
            row[j] = " ";
            j++;
        }
        this.space.push(row);
        i++;
    }
    this.isInside = function(vector) {
        return vector.x >= 0 && vector.x < this.width &&
               vector.y >= 0 && vector.y < this.height;
    };
    this.get = function(vector) {
        return this.space[vector.x][vector.y];
    }
    this.set = function(vector, value) {
        this.space[vector.x][vector.y] = value;
    }
}

var grid = new Grid(5, 5);
console.log(grid.space);
console.log(grid.get(new Vector(1, 1)));
grid.set(new Vector(1, 1), "X");
console.log(grid.get(new Vector(1, 1)));
console.log(grid.space);

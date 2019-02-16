class PGroup {
    constructor(first_group) {
        this.group = first_group;
    }
    add(item) {
        this.group[this.group.length] = item;
    }
    delete(item) {
        let new_group = [];
        let i = 0;
        let j = 0;
        while (i < this.group.length) {
            if (this.group[i] != item) {
                new_group[j] = this.group[i];
                j++;
            }
            i++;
        }
        this.group = new_group;
    }
    has(item) {
        let i = 0;
        while (i < this.group.length) {
            if (this.group[i] == item) {
                return true;
            }
            i++;
        }
        return false;
    }
}

a = new PGroup([]);
a.add("a");
console.log(a);
console.log("Has A?: ", a.has("a"));
a.add("b");
console.log(a);
console.log("Has B?: ", a.has("b"));
a.delete("a");
console.log(a);
console.log("Has A?: ", a.has("a"));

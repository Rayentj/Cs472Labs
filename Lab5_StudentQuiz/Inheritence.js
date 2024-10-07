
//------------------------Class Syntax Implementation----------------------------------*/


// Animal class
class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run(speedIncrease) {
        this.speed += speedIncrease;
        console.log(`${this.name} is running at speed ${this.speed}.`);
    }

    // Static method to compare the speed of two animals
    static compareBySpeed(a1, a2) {
        return a1.speed - a2.speed;
    }
}

// Rabbit class that extends Animal
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides.`);
    }
}

// Test the classes
let rabbit = new Rabbit("Bunny", 5);
rabbit.run(10); // Bunny is running at speed 15
rabbit.hide();  // Bunny hides.

let animal = new Animal("Cheetah", 20);
animal.run(5);  // Cheetah is running at speed 25

// Compare speeds of rabbit and animal
console.log(Animal.compareBySpeed(rabbit, animal));  // Output: negative value (since rabbit is slower)



//--------------------------Prototypal Inheritance Style-----------*/

// Animal constructor function
function Animal(name, speed) {
    this.name = name;
    this.speed = speed;
}

Animal.prototype.run = function(speedIncrease) {
    this.speed += speedIncrease;
    console.log(`${this.name} is running at speed ${this.speed}.`);
};

Animal.compareBySpeed = function(a1, a2) {
    return a1.speed - a2.speed;
};

// Rabbit constructor function that inherits from Animal
function Rabbit(name, speed) {
    Animal.call(this, name, speed); // Call the parent constructor
}

// Set up inheritance
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

// Rabbit-specific method
Rabbit.prototype.hide = function() {
    console.log(`${this.name} hides.`);
};

// Test the prototypal inheritance
let rabbitProto = new Rabbit("Bunny", 5);
rabbitProto.run(10);  // Bunny is running at speed 15
rabbitProto.hide();   // Bunny hides.

let animalProto = new Animal("Cheetah", 20);
animalProto.run(5);   // Cheetah is running at speed 25

// Compare speeds
console.log(Animal.compareBySpeed(rabbitProto, animalProto));  // Output: negative value


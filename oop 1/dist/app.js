"use strict";
class animal {
    constructor(name, walkType, sound) {
        this.name = name;
        this.walkType = walkType;
        this.sound = sound;
    }
    move() {
        console.log(this.name, this.walkType, "with sound", this.sound);
    }
}
class Snake extends animal {
    constructor() {
        super('snake', 'crawl', 'sound.mp3');
    }
}
class Dog extends animal {
    constructor() {
        super('dog', 'walk', 'sound.mp3');
    }
}
class Birt extends animal {
    constructor() {
        super('birt', 'fly', 'sound.wav');
    }
}
const s = new Snake();
s.move();
const d = new Dog();
d.move();   
const b = new Birt();
b.move();

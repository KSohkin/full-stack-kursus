class PErson {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('Hello, my name is ' + this.name)
    }
}

const adam = new PErson('Adam Ondra', 29)
adam.greet()

const janja = new PErson('Janja Garnbret', 23)
janja.greet()

class Persona {
    constructor(name, lastname, age) {
        this.name = name
        this.lastname = lastname
        this.age = age
    }

    getFullName() {
        return `${this.name} ${this.lastname}`
    }

    getAge() {
        return this.age
    }

}

const person = new Person("John", "Doe", "i dont know")   

console.log(person.getAge())




const persona4 = {
    name: 'John',
    lastname: 'Doe',
    age: 30,
    getFullName: () => {
        console.log(user.name, user.lastname)
    },

    getAge: function() {
        return this.age
    }
}

const persona5 = {
    
}

user.getFullName()
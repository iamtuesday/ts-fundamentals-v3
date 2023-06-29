class Person {
     public name: string;
     private lastname: string;
     private age: number;
     nationality: string;

         constructor(name: string, lastname: string, age: number, nationality: string){
             this.name = name;
             this.lastname = lastname;
             this.age = age;
             this.nationality = nationality
         }

        getFullName() {
            console.log(this.name + " " + this.lastname);
        }

        getAge() {
            console.log(this.age);
        }
}

const persona = new Person("Jhon", "Doe", 25, "Mexican");
const persona2 = new Person("Jane", "Doe", 25, "Mexican");
const persona3 = new Person("Jesus", "Cerdan",17, "Peuvian");


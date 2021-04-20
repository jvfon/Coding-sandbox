class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    
    }

    printName() {
        console.log(this.name)
    }
}
const user = new User("Sally", 25);
const user2 = new User("Joey", 35);
user.printName();
user2.printName();
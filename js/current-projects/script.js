function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
}
const user = new User("Sally", 25);
console.log(user);
let person = {
    name: "Joe",
    hobbies: ["Programming", "Music", "Hiking"],
    address: {
        street: "123 Main St.",
        city: "Newport"
    }
}

console.log(person.hobbies[2]);
console.log(person.name);
console.log(person.address.city);

let book ={
    title: "Once",
    author: {
        name: "Joe",
        age: 45
    }
}

book.title = "More";

console.log(book.title);
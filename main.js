var person = {
    fname: "Ceparu",
    sname: "Florin",
    age: 28,
    hobby: "photography"
}

console.log(person.fname + " " + person.sname);

function getName(name) {
    console.log("Numele meu este: " + name);
}

getName(person.fname);
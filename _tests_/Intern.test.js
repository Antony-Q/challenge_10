const Intern = require('../lib/Intern.js');

test('creates an Intern object instance', () => {
    const i = new Intern();
    expect(typeof (i)).toBe("object");
});


test('creates an Intern object instance', () => {
    const intern = new Intern("Getscoffee", 103, "CoffeeIGets@gmail.com", "Univerisity of Texas");
    

    expect(intern.name).toBe(intern.getName());
    expect(intern.id).toBe(intern.getId());
    expect(intern.email).toBe(intern.getEmail());
    expect(intern.getSchool()).toBe(intern.getSchool());
});
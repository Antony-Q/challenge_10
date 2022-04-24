const Intern = require('../lib/Intern.js');

test('create intern instance', () => {
    const c = new Intern();
    expect(typeof (c)).toBe("object");
});


test('creates an Intern object instance', () => {
    const intern = new Intern("Getscoffee", 103, "CoffeeIGets@gmail.com", "Univerisity of Texas");
    

    expect(intern.name).toBe(intern.getName());
    expect(intern.id).toBe(intern.getid());
    expect(intern.email).toBe(intern.getemail());
    expect(intern.getSchool()).toBe(intern.getSchool());
});
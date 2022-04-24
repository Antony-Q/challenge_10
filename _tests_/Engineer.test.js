const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object instance', () => {
    const b = new Engineer();
    expect(typeof (b)).toBe("object");
});


test('creates an Engineer object instance', () => {
    const engineer = new Engineer("Alex", 102, "Asterisk102@gmail.com", "https://github.com/Alex102");
    
    
    expect(engineer.name).toBe(engineer.getName());
    expect(engineer.id).toBe(engineer.getId());
    expect(engineer.email).toBe(engineer.getEmail());
    expect(engineer.getGitHub()).toBe(engineer.getGitHub());
});
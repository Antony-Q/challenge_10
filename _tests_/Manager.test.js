const Manager = require('../lib/Manager.js');

test("creates an Manager object instance", () => {
    const m = new Manager();
    expect(typeof (m)).toBe("object");
});


test('creates an Manager object instance', () => {
    const manager = new Manager("Kyle", 101, "Kyle311@gmail.com", 7291);
    
    
    expect(manager.name).toBe(manager.getName());
    expect(manager.id).toBe(manager.getId());
    expect(manager.email).toBe(manager.getEmail());
    expect(manager.getOfficeNumber()).toBe(manager.getOfficeNumber());
});
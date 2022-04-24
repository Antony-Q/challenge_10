const Manager = require('../lib/Manager.js');

test("create manager instance", () => {
    const a = new Manager();
    expect(typeof (a)).toBe("object");
});


test('create manager instance', () => {
    const manager = new Manager("Kyle", 101, "Kyle311@gmail.com", 7291);
    
    
    expect(manager.name).toBe(manager.getName());
    expect(manager.id).toBe(manager.getid());
    expect(manager.email).toBe(manager.getemail());
    expect(manager.getOfficeNumber()).toBe(manager.getOfficeNumber());
});
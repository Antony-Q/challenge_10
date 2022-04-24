const Employee = require('../lib/Employee.js');

test('create employee instance', () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test('create employee instance', () => {
    const employee = new Employee('Joe', 104, 'Joe101@gmail.com');
    
    expect(employee.name).toBe(employee.getName());
    expect(employee.id).toBe(employee.getid());
    expect(employee.email).toBe(employee.getemail());
    expect(employee.getRole()).toBe("employee");
});
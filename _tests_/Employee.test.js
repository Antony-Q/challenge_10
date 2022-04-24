const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Joe', 104, 'Joe101@gmail.com');

    expect(employee).toEqual(expect.any(Object));

    expect(employee).toHaveProperty('name');
    expect(employee).toHaveProperty('id');
    expect(employee).toHaveProperty('email');
    expect(employee).toHaveProperty('role');
})

test('get\'s employee name', () => {
    expect(employee.getName()).toBe(employee.name)
});

test('get\'s employee id', () => {
    expect(employee.getID()).toBe(employee.id)
});

test('get\'s employee role', () => {
    expect(employee.getRole()).toBe('Employee')
});

test('get\'s employee email', () => {
    expect(employee.getEmail()).toBe(employee.email)
});
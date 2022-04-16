class Employee {
    constructor(name, id, email, officenumber){
        this.name = name
        this.email = email
        this.id = id
        this.id = officenumber
    };

    getOfficeNumber() {
        return this.officenumber
    };

    getEmail() {
        return this.email
    };

    getID() {
        return this.id
    };

    getName() {
        return this.name
    };

    getRole() { // returns 'Employee'
        return 'Employee'
    };
}

module.exports = Employee
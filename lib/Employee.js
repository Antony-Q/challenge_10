class Employee {
    constructor(name, id, email){
        this.name = name
        this.email = email
        this.id = id
    };

    getName() {
        return this.name
    };

    getID() {
        return this.id
    };
    
    getEmail() {
        return this.email
    };

    getOfficeNumber() {
        return this.officenumber
    };

    getRole() {
        return 'Employee'
    };
}

module.exports = Employee
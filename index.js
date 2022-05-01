const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const Team = require('./lib/Team');

new Team().createTeam();

function Team(name, id, email, office, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
    this.role = role;
  }
  
  const createManager = (manager) => {
    const { name, id, email, office, role } = manager;
};
  
  console.log(Team.make);  
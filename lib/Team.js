const inquirer = require("inquirer");
const createTeam = require("./layout/layout");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

function Team() {
  this.manager = {};
  this.employee = [];
  this.engineer = [];
  this.intern = [];
};
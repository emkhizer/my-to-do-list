#! /usr/bin/env node
import inquirer from "inquirer";

let todolist = [];
let condition = true;

while (condition) {
  let addTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter your New Task:",
    },
  ]);
  todolist.push(addTask.task);
  console.log(`${addTask.task} Task added in Todo-list successfully`);
  let addMoretask = await inquirer.prompt([
    {
      name: "addmore",
      type: "confirm",
      message: "Do you want to Add more task:",
      default: "false",
    },
  ]);
  condition = addMoretask.addmore
}
console.log("your updated Todo-list is:" , todolist);

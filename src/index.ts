import readline from 'readline-sync';
import { addTask, completeTask, reopentask, editTask, deleteTask, listTasks } from "./services/taskservice";

while(true){
  console.log("\n===== TASK MANAGER =====");
  console.log("1. Add Task");
  console.log("2. List Tasks");
  console.log("3. Complete Task");
  console.log("4. Resopen Task")
  console.log("5. Edit Task");
  console.log("6. Delete Task");
  console.log("7. Exit");

  const choice = readline.question("choose an option: ");

  if(choice === "1"){
    const title = readline.question("Enter task title: ");
    const added = addTask(title);

    if(added){
        console.log("Task added!");
    }else{
        console.log("Task title cannot be empty!");
    }
  }

  else if(choice === "2"){
    listTasks();
  }

  else if(choice === "3"){
    const id = Number(readline.question("Enter task ID: "));
    completeTask(id);
    console.log("Task completed!");
  }

  else if(choice === "4"){
    const id = Number(readline.question("Enter task ID: "));
    reopentask(id);
    console.log("Task Reopened");
  }

  else if(choice === "5"){
    const id = Number(readline.question("Enter task ID: "));
    const newtitle = readline.question("Enter new title: ");

    editTask(id, newtitle);
    console.log("Task Updated!");
  }

  else if(choice === "6"){
    const id = Number(readline.question("Enter task ID: "));
    const deleted = deleteTask(id);

    if(deleted){
        console.log("Task deleted successfully!");
    }else{
        console.log("Task not found");
    }
  }

  else if(choice === "7"){
    console.log("Exiting....");
    break;
  }

  else{
    console.log("Invalid option!");
  }
}
import { Task } from "../types/task";

const tasks: Task[] = [];

export function addTask(title: string): boolean {
  if (!title.trim()) {
    return false;
  }
  const newTask: Task = {
    id: tasks.length + 1,
    title,
    completed: false,
  };

  tasks.push(newTask);
  return true;
}

export function deleteTask(id: number): boolean {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return false;
  }
  tasks.splice(index, 1);
  return true;
}

export function completeTask(id: number): void {
  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = true;
  }
}

export function reopentask(id: number): void {
  const task = tasks.find((task) => task.id == id);

  if (task) {
    task.completed = false;
  }
}

export function editTask(id: number, newTitle: string): void {
  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.title = newTitle;
  }
}

export function getTask(id: number): Task | undefined {
  return tasks.find((task) => task.id === id);
}

export function listTasks(): void {
  tasks.forEach((task) => {
    console.log(`[${task.completed ? "✓" : " "}] ${task.id}. ${task.title}`);
  });
}















//-------------------------------------------------------------

// import { Task } from "./types/task";

// const tasks: Task[] = [];

// function addTask(title: string): void {
//   const newtask: Task = {
//     id: tasks.length + 1,
//     title: title,
//     completed: false,
//   };

//   tasks.push(newtask);
// }

// function deleteTask(id: number): void {
//   const index = tasks.findIndex((task) => task.id == id);

//   if (index !== -1) {
//     tasks.splice(index, 1);
//   }
// }

// function completeTask(id: number): void {
//   const task = tasks.find((task) => task.id === id);

//   if (task) {
//     task.completed = true;
//   }
// }

// function reopenTask(id: number): void {
//   const task = tasks.find((task) => task.id === id);

//   if (task?.completed == true) {
//     task.completed = false;
//   }
// }

// function editTask(id: number, newtitle: string): void {
//   const task = tasks.find((task) => task.id == id);

//   if (task) {
//     task.title = newtitle;
//   }
// }

// function getTask(id: number): Task | undefined {
//   const task = tasks.find((task) => task.id == id);

//   console.log(task);
//   return task;
// }

// function listTasks(): void{
//     tasks.forEach(task => {
//         console.log(
//             `[${task.completed ? "v/" : " "} ]${task.id}. ${task.title}`
//         )
//     });
// }

// function searchTasks(keyword: string): Task[]{
//     return tasks.filter(task =>
//         task.title.toLowerCase().includes(keyword.toLowerCase())
//     );
// }

// // function completedTaks(): Task[]{
// //     return tasks.filter(task =>
// //         task.completed
// //     );
// // }

// // function pendingTasks(): Task[]{
// //     return tasks.filter(task =>
// //         !task.completed
// //     );
// // }

// //Instead of above 2 function

// function complete_or_pending(completed: boolean): Task[]{
//     return tasks.filter(task => task.completed === completed)
// }

// addTask("Learn Ts");
// addTask("Build Task Manager");
// addTask("practice typescript");

// // deleteTask(1);

// completeTask(1);

// // reopenTask(1);

// // editTask(3, "practice ts");

// // getTask(2);

// // console.log(tasks);

// // listTasks();

// // console.log(searchTasks("typescript"));

// // console.log(complete_or_pending(true));

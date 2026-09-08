import { describe, it, expect } from "vitest";
import { addTask, getTask, deleteTask } from "./taskservice";

// describe("Task Manager", () =>{
//     it("should add a task", () => {
//         addTask("Learn Typescript");

//         const task = getTask(1);

//         expect(task?.title).toBe("Learn Typescript");
//         expect(task?.completed).toBe(false);
//     });
// });

describe("Task Manager", () => {
    it("should delete a task", () => {

        addTask("Learn ts");

        const deleted = deleteTask(1);

        expect(deleted).toBe(true);

        expect(getTask(1)).toBeUndefined();
    })
});
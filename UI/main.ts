import { addTask} from ./

declare const process: {
  argv: string[];
  exit(code?: number): never;
};

const [,, action, ...args] = process.argv;

try {
  switch (action) {
    case "list":
      
      const tasks = listTasks();
      console.log(JSON.stringify(tasks ?? []));
      break;

    case "add":
      const title = args.join(" ");
      const added = addTask(title);
      console.log(JSON.stringify({ success: !!added }));
      break;

    case "complete":
      completeTask(Number(args[0]));
      console.log(JSON.stringify({ success: true }));
      break;

    case "reopen":
      reopentask(Number(args[0]));
      console.log(JSON.stringify({ success: true }));
      break;

    case "edit":
      const id = Number(args[0]);
      const newTitle = args.slice(1).join(" ");
      editTask(id, newTitle);
      console.log(JSON.stringify({ success: true }));
      break;

    case "delete":
      const deleted = deleteTask(Number(args[0]));
      console.log(JSON.stringify({ success: !!deleted }));
      break;

    default:
      console.error("Unknown action");
      process.exit(1);
  }
} catch (err: any) {
  console.error(err?.message || "Execution error");
  process.exit(1);
}
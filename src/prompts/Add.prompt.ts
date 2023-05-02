import { TaskCollection } from "../models/Task.collection";
import { PromptMain } from "./start.prompt.js";

import inquirer from "inquirer";

export async function PromptAdd(
  Collection: TaskCollection,
  Completed: boolean
): Promise<void> {
  console.clear();
  const answer = await inquirer.prompt({
    type: "input",
    name: "Task",
    message: "What is the name of the task",
  });

  Collection.add(answer["Task"]);

  PromptMain(Collection, Completed);
}

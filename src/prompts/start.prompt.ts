import { TaskCollection } from "../models/Task.collection.js";
import inquirer from "inquirer";
import { PromptAdd } from "./Add.prompt.js";
import { Commands } from "../commands/commands.js";
import { displayPrompt } from "./display.prompt.js";
import { PromptCheck } from "./Check.prompt.js";

export async function PromptMain(
  Collection: TaskCollection,
  Completed: boolean
): Promise<void> {
  // console.clear();

  displayPrompt(Collection, Completed);

  const answer = await inquirer.prompt({
    type: "list",
    name: "Commands",
    message: "Chose a option",
    choices: Object.values(Commands),
  });

  switch (answer["Commands"]) {
    case Commands.Add:
      PromptAdd(Collection, Completed);
      break;

    case Commands.Purge:
      Collection.Purge();
      PromptMain(Collection, Completed);
      break;

    case Commands.Show:
      Completed = !Completed;
      PromptMain(Collection, Completed);
      break;

    case Commands.Complete:
      PromptCheck(Collection, Completed);
      break;
  }

  // console.log(answer);
}

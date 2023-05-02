import { TaskCollection } from "../models/Task.collection.js";
import inquirer from "inquirer";
import { TaskEntity } from "../models/Task.entity.js";
import { PromptMain } from "./start.prompt.js";

export async function PromptCheck(
  Collection: TaskCollection,
  Complete: boolean
): Promise<void> {
  const answer = await inquirer.prompt({
    type: "checkbox",
    name: "Complete",
    message: "Check to Complete the Tasks",
    choices: Collection.getTaskItems(Complete).map((item) => ({
      name: item.task,
      value: item.id,
      checked: item.completed,
    })),
  });

  let CompletedTasks = answer["Complete"] as Number[];

  Collection.getTaskItems(true).forEach((item: TaskEntity) =>
    Collection.completeMark(
      item.id,
      CompletedTasks.find((id) => id === item.id) !== undefined
    )
  );

  PromptMain(Collection, Complete);
}

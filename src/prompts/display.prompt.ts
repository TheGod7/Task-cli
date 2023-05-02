import { TaskCollection } from "../models/Task.collection";
import { TaskEntity } from "../models/Task.entity";

export function displayPrompt(
  Collection: TaskCollection,
  Completed: boolean
): void {
  console.log(
    `${Collection.username}'s Tasks ` +
      `(${Collection.getCount().incomplete} tasks to do)`
  );
  Collection.getTaskItems(Completed).forEach((item: TaskEntity) =>
    item.detailsPrint()
  );
}

import { TaskEntity } from "../models/Task.entity.js";

export const example = [
  new TaskEntity(1, "new task"),
  new TaskEntity(2, "new asasatask"),
  new TaskEntity(3, "asasnew task", true),
];

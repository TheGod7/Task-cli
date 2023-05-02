import { Task } from "../interfaces/Task.interface.js";
import { TaskEntity } from "./Task.entity.js";

type TaskCount = {
  incomplete: number;
  completed: number;
  total: number;
};

export class TaskCollection {
  private nextId = 1;

  protected Map = new Map<number, Task>();

  constructor(public username: string, public TasksItem: Task[]) {
    TasksItem.forEach((item) => this.Map.set(item.id, item));
  }

  add(task: string): number {
    while (this.getTaskById(this.nextId)) {
      this.nextId++;
    }
    this.Map.set(this.nextId, new TaskEntity(this.nextId, task));
    return this.nextId;
  }

  getTaskById(id: number): Task {
    return this.Map.get(id);
  }

  getTaskItems(Completed: boolean): Task[] {
    return [...this.Map.values()].filter(
      (item) => Completed || !item.completed
    );
  }

  completeMark(id: number, complete: boolean): void {
    let Task: Task = this.getTaskById(id);

    if (Task) {
      Task.completed = complete;
    }
  }

  Purge(): void {
    this.Map.forEach((task) => {
      if (task.completed) {
        this.Map.delete(task.id);
      }
    });
  }

  getCount(): TaskCount {
    return {
      completed: this.getTaskItems(true).length,
      incomplete: this.getTaskItems(false).length,
      total: this.Map.size,
    };
  }
}

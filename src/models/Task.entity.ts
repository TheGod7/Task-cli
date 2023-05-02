export class TaskEntity {
  constructor(
    public id: number,
    public task: string,
    public completed: boolean = false
  ) {}

  detailsPrint(): void {
    console.log(
      `${this.id}\t${this.task} ${this.completed ? "\t(completed)" : ""}`
    );
  }
}

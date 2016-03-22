import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Skeleton Angular2 App!</h1>
      <h3 *ngFor="#task of tasks" (click)="taskWasSelected(task)">{{ task.description }}</h3>
    <div>
  `
})

////TaskListComponent////
@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  template: `
  <h3 *ngFor="#currentTask of taskList" (click)="taskClicked(currentTask)">
    {{ currentTask.description }}
  </h3>
  `
})

export class TaskListComponent {
  public taskList: Task[];
  taskClicked(clickedTask: Task): void {
    console.log(clickedTask);
  }
}
/////end TaskListComponent/////

export class AppComponent {
  public tasks: Task[];
  constructor(){
    this.tasks = [
     new Task("Eat StringCheese", 0),
     new Task("Eat Yogurt", 1),
     new Task("Commit", 2),
     new Task("Catch Katmandu", 3)
   ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log(clickedTask);
  }
}


export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number){
  }
}

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

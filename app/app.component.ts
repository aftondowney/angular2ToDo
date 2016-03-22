import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';


/////MyAppComponent//////
@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>To-Do List</h1>
      <task-list [taskList]="tasks"
      (onTaskSelect)="taskWasSelected($event)">
      </task-list>
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

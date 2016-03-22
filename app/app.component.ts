import { Component, EventEmitter } from 'angular2/core';

/////TaskComponent////
@Component({
  selector: 'task-display',
  inputs: ['task'],
  template: `
  <h3>{{ task.description }}</h3>
  `
})

export class TaskComponent {
  public task: Task;
}

////TaskListComponent////
@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent ],
  template: `
  <task-display *ngFor="#currentTask of taskList" (click)="taskClicked(currentTask)"
  [class.selected]="currentTask === selectedTask"
  [task]="currentTask">
  </task-display>
  `
})

export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    console.log('child', clickedTask);
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
}
/////end TaskListComponent/////

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


export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number){
  }
}

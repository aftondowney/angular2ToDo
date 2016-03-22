import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';

////TaskListComponent////
@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  templateUrl: 'app/task-list.view.html'
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
  createTask(description: string): void {
    this.taskList.push(
      new Task(description, this.taskList.length)
    );
  }
}
/////end TaskListComponent/////



////it is best practice most of the time for an Angular component to include both the View HTML in the template, and the Controller logic in the class definition. This way they are right next to each other so it's easy to see how they interact, and it's easier to prevent bugs. If your template is large enough to require a separate file, odds are that it will be easier to work with if you divide it up into smaller components. Before you split a template into a separate file, ask yourself if the component is trying to do too much at once. In our case, the template for our TaskListComponent is so short that there is no need to have it in a separate file////

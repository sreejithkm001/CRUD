import { Component } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  // initialize
  tasks: any[] = [];
  newTask: any = { title: '', description: '' };
  editingTaskIndex: number | null = null;
  updatedTask: any = { title: '', description: '' };

  //  service injected .
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }
  // click for add task
  addTask(): void {
    if (
      this.newTask.title.trim() !== '' &&
      this.newTask.description.trim() !== ''
    ) {
      this.taskService.addTask(this.newTask);
      this.newTask = { title: '', description: '' };
      console.log(this.addTask);
    }
  }
  // logic for delete task
  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
    alert('Are you confirm to delete....');
  }
  // logic for edit task
  editTask(index: number): void {
    this.editingTaskIndex = index;
    console.log(this.editTask);
    this.updatedTask = { ...this.tasks[index] };
  }
  // logic for update task
  updateTask(): void {
    if (
      this.updatedTask.title.trim() !== '' &&
      this.updatedTask.description.trim() !== '' &&
      this.editingTaskIndex !== null
    ) {
      this.taskService.updateTask(this.editingTaskIndex, this.updatedTask);
      this.editingTaskIndex = null;
      this.updatedTask = { title: '', description: '' };
    }
  }
}

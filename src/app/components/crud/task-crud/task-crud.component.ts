import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-crud',
  templateUrl: './task-crud.component.html',
  styleUrls: ['./task-crud.component.scss']
})
export class TaskCrudComponent implements OnInit {
  tasks: Task[] = [];
  taskForm!: FormGroup;
  showForm = false;
  submitted = false;
  editingId: string | null = null;
  filterStatus: Task['status'] | 'all' = 'all';
  sortBy: 'dueDate' | 'priority' | 'createdAt' = 'dueDate';

  statusOptions: Task['status'][] = ['pending', 'in-progress', 'completed'];
  priorityOptions: Task['priority'][] = ['low', 'medium', 'high'];

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadTasks();
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = this.sortTasks(tasks);
    });
  }

  private initForm(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      dueDate: ['', Validators.required],
      priority: ['medium', Validators.required],
      status: ['pending', Validators.required]
    });
  }

  private loadTasks(): void {
    this.tasks = this.sortTasks(this.taskService.getTasks());
  }

  private sortTasks(tasks: Task[]): Task[] {
    const sorted = [...tasks];
    switch (this.sortBy) {
      case 'dueDate':
        return sorted.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
      case 'priority':
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        return sorted.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
      case 'createdAt':
        return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      default:
        return sorted;
    }
  }

  get f() {
    return this.taskForm.controls;
  }

  get filteredTasks(): Task[] {
    if (this.filterStatus === 'all') {
      return this.tasks;
    }
    return this.tasks.filter(task => task.status === this.filterStatus);
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.taskForm.invalid) {
      return;
    }

    const formValue = this.taskForm.value;

    if (this.editingId) {
      // Update existing task
      this.taskService.updateTask(this.editingId, {
        ...formValue,
        id: this.editingId
      });
    } else {
      // Add new task
      this.taskService.addTask(
        formValue.title,
        formValue.description,
        formValue.dueDate,
        formValue.priority
      );
    }

    this.resetForm();
  }

  editTask(task: Task): void {
    this.editingId = task.id;
    this.taskForm.patchValue({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      status: task.status
    });
    this.showForm = true;
    this.submitted = false;
  }

  deleteTask(id: string): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id);
    }
  }

  updateStatus(taskId: string, newStatus: Task['status']): void {
    this.taskService.updateTask(taskId, { status: newStatus });
  }

  updatePriority(taskId: string, newPriority: Task['priority']): void {
    this.taskService.updateTask(taskId, { priority: newPriority });
  }

  resetForm(): void {
    this.taskForm.reset({ priority: 'medium', status: 'pending' });
    this.submitted = false;
    this.editingId = null;
    this.showForm = false;
  }

  onSortChange(): void {
    this.tasks = this.sortTasks(this.tasks);
  }

  getStatusColor(status: Task['status']): string {
    switch (status) {
      case 'pending':
        return '#ffc107';
      case 'in-progress':
        return '#17a2b8';
      case 'completed':
        return '#28a745';
      default:
        return '#6c757d';
    }
  }

  getPriorityColor(priority: Task['priority']): string {
    switch (priority) {
      case 'high':
        return '#dc3545';
      case 'medium':
        return '#ff9800';
      case 'low':
        return '#28a745';
      default:
        return '#6c757d';
    }
  }

  getTaskCount(status: Task['status'] | 'all'): number {
    if (status === 'all') {
      return this.tasks.length;
    }
    return this.tasks.filter(task => task.status === status).length;
  }
}

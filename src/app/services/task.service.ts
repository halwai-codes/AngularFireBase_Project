import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  private storageKey = 'tasks';

  constructor() {
    this.loadTasks();
  }

  private loadTasks(): void {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.tasksSubject.next(JSON.parse(saved));
    }
  }

  private saveTasks(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasksSubject.value));
  }

  getTasks(): Task[] {
    return this.tasksSubject.value;
  }

  addTask(title: string, description: string, dueDate: string, priority: 'low' | 'medium' | 'high'): Task {
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      description,
      status: 'pending',
      priority,
      dueDate,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const tasks = [...this.tasksSubject.value, newTask];
    this.tasksSubject.next(tasks);
    this.saveTasks();
    return newTask;
  }

  updateTask(id: string, updates: Partial<Task>): void {
    const tasks = this.tasksSubject.value.map(task =>
      task.id === id ? { ...task, ...updates, updatedAt: new Date() } : task
    );
    this.tasksSubject.next(tasks);
    this.saveTasks();
  }

  deleteTask(id: string): void {
    const tasks = this.tasksSubject.value.filter(task => task.id !== id);
    this.tasksSubject.next(tasks);
    this.saveTasks();
  }

  getTaskById(id: string): Task | undefined {
    return this.tasksSubject.value.find(task => task.id === id);
  }

  getTasksByStatus(status: Task['status']): Task[] {
    return this.tasksSubject.value.filter(task => task.status === status);
  }

  getTasksByPriority(priority: Task['priority']): Task[] {
    return this.tasksSubject.value.filter(task => task.priority === priority);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = `${environment.apiUrl}/tasks`;

  constructor(private http: HttpClient) {}

  addTask(task: any) {
    return this.http.post(this.baseUrl, task);
  }
  getAllTasks() {
    return this.http.get(`${this.baseUrl}/all`);
    }
  getTasksByUserId(userId: number) {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  deleteTask(taskId: number) {
    return this.http.delete(`${this.baseUrl}/${taskId}`);
  }
}

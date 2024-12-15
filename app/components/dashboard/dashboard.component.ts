import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule,HttpClientModule],
  providers:[TaskService]
})
export class DashboardComponent implements OnInit {
  tasks: any[] = [];
  userId:any;


  constructor(private taskService: TaskService, private router: Router) {}


  ngOnInit() {
    const userId = 1; // Replace with logged-in user ID
    this.taskService.getAllTasks().subscribe((data: any) => {
      this.tasks = data;    this.userId=localStorage.getItem('id');

    });
  }


  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      alert('Task deleted successfully');
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    });
  }

  logout() {
    alert('Logged out successfully');
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

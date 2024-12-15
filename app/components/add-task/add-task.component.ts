import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  imports: [FormsModule,HttpClientModule],
  providers:[TaskService]
})
export class AddTaskComponent {
  title: string = '';
  description: string = '';
 complete:string='incomplete';


  constructor(private taskService: TaskService, private router: Router) {}

  addTask() {
    const task = {
      title: this.title,
      description: this.description,
      completed:this.complete==='complete',
      user: { id: localStorage.getItem('id') }, // Replace with logged-in user ID
    };
    this.taskService.addTask(task).subscribe({
      next: () => {
        alert('Task added successfully');
        this.router.navigate(['/dashboard']);
      },
      error: () => alert('Error adding task'),
    });

  }
  getStatusValue(ev:any){
    console.log("&&&&&&",ev.target.value);
    this.complete=ev.target.value;
    
  }
}

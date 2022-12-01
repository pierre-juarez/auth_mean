import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks:any = [];
  constructor(private tasksService: TasksService){}

  ngOnInit(){
    this.tasksService.getTasks()
      .subscribe({
        next: (res) => {
          this.tasks = res;
        },
        error: (err) => console.log(err)
      });
  }
}

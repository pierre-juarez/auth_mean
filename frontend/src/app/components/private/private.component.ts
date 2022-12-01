import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent {

  privateTasks: any = []; 
  constructor(private tasksService: TasksService){}

  ngOnInit(){
    this.tasksService.getPrivateTasks()
      .subscribe({
        next: (res) => {
          this.privateTasks = res; 
        },
        error: (err) => console.log(err)
      });
  }
}

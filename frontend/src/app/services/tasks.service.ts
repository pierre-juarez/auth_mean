import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL = "http://localhost:3000/api";
  constructor(private http: HttpClient) { }

  getTasks(){
    return this.http.get<any>(this.URL + '/tasks');
  }

  getPrivateTasks(){
    return this.http.get<any>(this.URL + '/private-tasks');
  }
}

import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodo$;
  }

  data = {
    task: '',
    completed: false
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  addTodo() {
    this.todoService.postTodo(this.data).subscribe((next: any) => {
      console.log(next);
    })
  }

  getTodo$ = this.todoService.getTodo$;

}

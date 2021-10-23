import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  data = {
    email: '', password: ''
  }

  login() {
    this.authService.login(this.data).subscribe((next: any) => {
      localStorage.setItem('access', next.access)
      localStorage.setItem('refresh ', next.refresh)
    });
  }

}

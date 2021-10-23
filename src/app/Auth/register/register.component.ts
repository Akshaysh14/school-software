import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterResponse } from 'src/app/interfaces/register-response.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  data = {
    name: '', email: '', password: '', recaptcha: ''
  }

  register() {
    this.authService.register(this.data).subscribe(next => {
      // const response = next as RegisterResponse;
      this.router.navigate(['/login']);
    });
  }
}

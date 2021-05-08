import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private http:HttpClient){}

  onSubmit(data: any)
  {
  this.http.post('http://localhost:4200',data)
  .subscribe((result: any) =>{console.warn("result",result)
  })
  window.location.href = "";
  alert("Welcome Back ! You are now Logged in your account " )
  console.warn(data);
  }

}

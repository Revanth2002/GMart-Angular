import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = "";

  constructor(private http:HttpClient){}

  onRegister(data: any , name : any)
  {
  this.http.post('http://localhost:4200',data)
  .subscribe((result: any) =>{console.warn("result",result)
  })
  window.location.href = "";
  alert("Welcome ! You have sucessfully registered" + name)
  console.log(data);
  }

  ngOnInit(): void {
  }

}

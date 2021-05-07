import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count = 1;

  carousel = [
    {
      'img' : 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'caption': 'Stay Home and Shop Safe'
    },
    {
      'img':"https://images.unsplash.com/photo-1611734828917-718f25babb2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
      'caption':"Get 40% off on Smart Phones"
    }
  ]



}

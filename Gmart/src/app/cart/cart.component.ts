import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Payment( del : any ){
    alert("Testing order placement has been made succesfully.We have received your order\n"  + "Your order is being delivered to " + del);
    window.location.href = "";
  }

  delivery_loc = "";

  cart_prod =[
    {
      'p_name': "Lenovo Ideapad Slim 3 10th Gen Intel Core i3",
      'p_img' : "https://images-na.ssl-images-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg",
      'p_price': " 49,999.00" 
    },
    {
      'p_name': " New Apple iPhone 11 (128GB) - Purple",
      'p_img' : "https://images-na.ssl-images-amazon.com/images/I/71tpxtLD0aL._SL1500_.jpg",
      'p_price': " 79,999.00" 
    }
  ]


}

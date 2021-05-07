import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  product_info = [
    {
      'cat': "LG television",
      'name' : "LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55CXPTA (Dark Steel Silver) (2020 Model)",
      'dis_price': "1,33,991.00",
      "org_price": " 2,49,990.00",
      "desc":"Resolution: 4K Ultra HD (3840x2160) | AI 4K Upscaler | Processor: α9 Gen3 AI Processor 4K Connectivity: 4 HDMI ports to connect set top box, Blu Ray players, gaming console | 3 USB ports to connect hard drives and other USB devices Sound: 40 Watts Output | 2.2 Ch Speaker | Dolby Atmos | OLED Surround | AI Sound Pro| AI Acoustic Tuning Smart TV Features: AI ThinQ | Built-in Google Assistant & Alexa | Apple Airplay 2 & Homekit | Home Dashboard | Unlimited OTT App Support d OTT App Support | Filmmaker Mode | G-Sync Compatibility | FreeSync Premium| Sports Alert Display: Real 4K OLED | Self-LIT Pixels | Eye Comfort Display | Slim Design Warranty Information : 3 years comprehensive warranty provided by the manufacture from the date of purchase | Offer Valid till 30th April’21",
      'img_1' : "https://images-na.ssl-images-amazon.com/images/I/81xACHhRqXL._SL1500_.jpg",
      'img_2' : "https://images-na.ssl-images-amazon.com/images/I/51%2BVDdedaYL._SL1500_.jpg",
      'img_3' : "https://images-na.ssl-images-amazon.com/images/I/71131XB8fLL._SL1500_.jpg",
    },
    
  ]


}


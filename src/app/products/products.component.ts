import { Component, OnInit } from '@angular/core';
import { product } from '../core/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:product[]=[];
  constructor() { }

  ngOnInit(): void {
    this.products =[
      {id: '1', title: "T-shirt 1",quantity:10, price: 18, like: 0,picture:'https://taraji-store.com/175-home_default/maillot-officiel-rougejaune.jpg'},
      {id: '2', title: "T-shirt 2", quantity: 10,price: 21, like: 0,picture:'https://taraji-store.com/107-home_default/third-kit-2022-2023.jpg'},
      {id: '3', title: "T-shirt 3", quantity: 8,price: 16,  like: 0,picture:'https://taraji-store.com/103-home_default/away-kit-2022-2023.jpg'}
    ]
  }
  Buy(id:string){
    // this.products.map((product)=>{
    //   if(product.id.match(id)){
    //     product.quantity=product.quantity-1;
    //   }
    // })
    this.products.map((product)=>product.id.match(id)&&product.quantity--)
  }

}

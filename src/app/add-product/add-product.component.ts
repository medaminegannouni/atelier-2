import { Component, OnInit } from '@angular/core';
import { product } from '../core/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
Produit!:product
email!:string
  constructor() { }

  ngOnInit(): void {
 this.Produit= new product()
  }
  ajouter(){
    console.log(this.Produit)
  }
}

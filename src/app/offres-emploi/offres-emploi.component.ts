import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/Emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  
  Emplois:Emploi[]=[];
  nbr!:number
  searchtext!:string
  constructor() { }

  ngOnInit(): void {
    this.Emplois=[
      {reference: '1', titre: "Developper",entreprise:"Vermeg", etat:true},
      {reference: '2', titre: "Ingeneer",entreprise:"Sopra", etat:false},
      {reference: '3', titre: "Designer",entreprise:"Esprit", etat:true}
    ]

  }
 
  bilan(){
    this.nbr=0
    for (let i =0;i<this.Emplois.length;i++)
    {
      if(this.Emplois[i].etat==true)
      this.nbr++
    }
  }

  serach(){
    this.Emplois=this.Emplois.filter(
      (listeemploikolo)=>listeemploikolo.entreprise.match(this.searchtext)
      
    )

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
/*tab : Array<string> =['premier' , 'deuxieme' ,'troisieme'];
nord ='lille';
sud ='marseille';
capitale='paris';*/
moyenne =0;
somme =0;
nbr =0;
enfants = ['ali','med','wiss'];
  constructor() { }

  ngOnInit(): void {
  }
  computeAvg (note: number) {
  this.somme += note;
  this.nbr++;
  this.moyenne = this.somme / this.nbr;
}
}

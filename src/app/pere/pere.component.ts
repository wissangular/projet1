import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
tab : Array<string> =['premier' , 'deuxieme' ,'troisieme'];
nord ='lille';
sud ='marseille';
capitale='paris';
  constructor() { }

  ngOnInit(): void {
  }

}

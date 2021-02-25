import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  image="https://ak.picdn.net/shutterstock/videos/1025294411/thumb/1.jpg?ip=x480"
  @Input() ordre:string="";
  @Input() villenaissance :string="";
  constructor() { }

  ngOnInit(): void {
  }

}

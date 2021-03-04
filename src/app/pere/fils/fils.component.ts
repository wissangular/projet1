import { Component, Input, OnInit ,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  image="https://ak.picdn.net/shutterstock/videos/1025294411/thumb/1.jpg?ip=x480"
 /* @Input() ordre:string=""; exemple 1*/ 

@Input () nom: string=""
  @Output() message = new EventEmitter<number>();
  note : number =0
  buttonStatus :boolean =false;
  constructor() { }

  ngOnInit(): void {
  }
  send(){
    this.message.emit(this.note);
    this.buttonStatus =true;
  }

}

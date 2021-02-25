import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tpangular';
  imgUrl = "https://pluspng.com/img-png/angular-logo-png-javascript-logo-png-img-500-500-free-transparent-angular-900x500.jpg"
  onClick($event :any) {
    console.log("ok is clicked", $event)
  }
  name: string = "";
}


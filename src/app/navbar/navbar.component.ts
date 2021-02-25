import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent implements OnInit {
titre="ETUDIENT";
image="https://www.prchecker.info/free-icons/128x128/student_128_px.png"
  constructor() { }

  ngOnInit(): void {
  }

}

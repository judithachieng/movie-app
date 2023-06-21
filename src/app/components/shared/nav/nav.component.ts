import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userEmail: string | null = null;

  constructor() { }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('email');
    console.log(this.userEmail)
  }

}

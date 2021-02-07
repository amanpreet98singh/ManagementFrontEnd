import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  search: boolean;
  constructor() { }

  ngOnInit(): void {
    this.search=true;
  }

  logout(): void{
    this.search=false;
    console.log("logout da implementare");
  }

}

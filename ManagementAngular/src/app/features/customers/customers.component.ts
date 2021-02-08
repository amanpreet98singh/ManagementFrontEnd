import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  arrayOne(n: number): any[] {
    return Array(n);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  constructor() { }
  
  arrayOne(n: number): any[] {
    return Array(n);
  }
  
  ngOnInit(): void {
  }

}


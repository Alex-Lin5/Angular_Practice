import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  // template: `
  // <p>success-alert works!</p>
  // `,
  styleUrls: ['./success-alert.component.css']
  // styles: [`
  // h2{
  //   color: lightgreen;
  // }`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

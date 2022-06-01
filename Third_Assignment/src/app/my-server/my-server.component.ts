import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-server',
  templateUrl: './my-server.component.html',
  styleUrls: ['./my-server.component.css']
})
export class MyServerComponent implements OnInit {
  isValid = true;
  isAdded = false;
  number = 0;
  content = "";
  theList = [];


  constructor() {  }
  display() {
    if(this.isValid === true)
      this.isValid = false;
    else
      this.isValid = true;
    
  }
  addContent() {
    this.theList.push(this.content);
    // this.theList.push(this.number+ " " + this.content);
    this.isAdded = true;
    setTimeout(() => {
      this.isAdded = false;      
    }, 500)
    this.number += 1;
  }
  ngOnInit(): void {
  }

}

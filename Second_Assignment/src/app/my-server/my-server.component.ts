import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-server',
  templateUrl: './my-server.component.html',
  styleUrls: ['./my-server.component.css']
})
export class MyServerComponent implements OnInit {
  serverName = ""
  isValid = false;
  constructor() { }
  clearInput() { 
    this.serverName = "";
    this.isValid = false;
  }
  checkInput(event: Event) {
    if (this.serverName == "")
      this.isValid = false;
    else 
      this.isValid = true;
  }
  ngOnInit(): void {
  }

}

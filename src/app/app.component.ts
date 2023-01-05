import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = "multiSelect";
  public show:boolean = false;
  public buttonName:any = 'Show';

  ngOnInit () {  }

  

  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  radio=false;
radio1=false;
  print(){
  console.log(this.radio,this.radio1)
  this.radio = false;
  this.radio1 = false;
}

cars = [
  { id: 1, name: "Air Quality" },
  { id: 2, name: "Audio"},
  { id: 3, name: "Displays" },
  { id: 4, name: "Lighting" },
  { id: 5, name: "Temperature" },
];

selected = [{ id: 1, name: "Air Quality" }];
}
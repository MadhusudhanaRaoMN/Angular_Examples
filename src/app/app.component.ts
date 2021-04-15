import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  title = 'This is First angular app';
  color = "background-color1";
  isDisable = false;

  public myValue="";
  myClick(){
    this.myValue = "Hey!! You have clicked this Button !!!!!!!!!!!!!!";
  }

  numbers = [1,2,3,4,5];
}

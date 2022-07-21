import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  constructor() {
    console.log("by all");
   }

  ngOnInit(): void {
    console.log("hi all! this is amar");
  }
  ngOnDestroy(){
    console.log("component got distroyed");
  }

}

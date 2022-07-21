import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  template: "<p>Hello, {{name}}!</p>"
})
export class FooterComponent implements OnInit {
  @Input() name: string | any;

  constructor() { }

  ngOnInit(): void {
  }

}

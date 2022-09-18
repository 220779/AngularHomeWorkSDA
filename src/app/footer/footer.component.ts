import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-footer',
  template:
 "<p> All Rights reserved!!!{{variable}}</p>",
  styles: [".p {color: red;}"]
})
export class FooterComponent implements OnInit {

  variable = "Thats All Folks!!!"

  constructor() { }

  ngOnInit(): void {
  }

}

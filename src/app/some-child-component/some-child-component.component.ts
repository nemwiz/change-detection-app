import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'some-child-component',
  templateUrl: './some-child-component.component.html',
  styleUrls: ['./some-child-component.component.css'],
  inputs: ['someText']
})
export class SomeChildComponentComponent implements OnInit {

  someText: string;

  constructor() { }

  ngOnInit() {
    console.log(this.someText)
  }

}

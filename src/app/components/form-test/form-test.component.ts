import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bpa-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent   implements OnInit {

  title = 'bpa';

  selectedItem = '';
  selectedItem2 = '';
  inputText = '';

  exampleList: string[] = [
    'one1',
    'two1',
    'three1',
    'four1'
  ];

  constructor() {}

  ngOnInit(): void {

  }

}

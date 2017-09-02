import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bpa-form-test-two',
  templateUrl: './form-test-two.component.html',
  styleUrls: ['./form-test-two.component.scss']
})
export class FormTestTwoComponent   implements OnInit {

  title = 'bpa';

  selectedItem = '';
  selectedItem2 = '';
  inputText = '';

  exampleList: string[] = [
    'one2',
    'two2',
    'three2',
    'four2'
  ];

  constructor() {}

  ngOnInit(): void {

  }

}


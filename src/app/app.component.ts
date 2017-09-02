import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bpa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  title = 'bpa';

  selectedItem = '';
  selectedItem2 = '';
  inputText = '';

  exampleList: string[] = [
    'one',
    'two',
    'three',
    'four'
  ];

  ngOnInit(): void {

  }

}

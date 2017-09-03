import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { EnumToArrayPipe } from '../../pipes/toArray.pipe';
import { USAStatesList } from '../../pipes/enums';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


@Component({
  selector: 'bpa-form-test-auto',
  templateUrl: './form-test-auto.component.html',
  styleUrls: ['./form-test-auto.component.scss']
})
export class FormTestAutoComponent   implements OnInit {

  stateControl: FormControl;

  filteredStates: any;

  selectedState = '';

  public usStates = new EnumToArrayPipe().transform(USAStatesList);

  constructor() {
    this.stateControl = new FormControl('',Validators.required);
    this.filteredStates = this.stateControl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }

  filterStates(val: string) {
    return val ? this.usStates.filter(state => state.label.toLowerCase().indexOf(val.toLowerCase()) !== -1)
      : this.usStates;
  }

  ngOnInit(): void {

  }

}


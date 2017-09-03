import { AfterViewInit, Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EnumToArrayPipe } from '../../pipes/toArray.pipe';
import { USAStatesList } from '../../pipes/enums';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


@Component({
  selector: 'bpa-form-test-auto',
  templateUrl: './form-test-auto.component.html',
  styleUrls: ['./form-test-auto.component.scss']
})
export class FormTestAutoComponent   implements OnInit, AfterViewInit {

  myform: FormGroup;

  filteredStates: any;

  selectedState = '';

  public usStates = new EnumToArrayPipe().transform(USAStatesList);

  exampleList: string[] = [
    'one1',
    'two1',
    'three1',
    'four1'
  ];

  constructor(
    private formBuilder: FormBuilder
  ) {}

  filterStates(val: string) {
    return val ? this.usStates.filter(state => state.label.toLowerCase().indexOf(val.toLowerCase()) !== -1)
      : this.usStates;
  }

  ngOnInit(): void {
    this.myform = this.formBuilder.group({
      stateControl: ['', Validators.required ],
      selectTestControl: ['', Validators.required]
    });

    this.filteredStates = this.myform.controls.stateControl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }

  ngAfterViewInit() {
    this.filteredStates = this.myform.controls.stateControl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
    // this.myform.controls.stateControl.valueChanges.subscribe() (
    //   () => {
    //     console.log(this.myform.controls.stateControl.value)
    //   }
    // )
  }

}


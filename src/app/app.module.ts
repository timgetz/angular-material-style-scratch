import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdAutocompleteModule, MdButtonModule, MdIconModule, MdInputModule, MdSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormTestTwoComponent } from './components/form-test-two/form-test-two.component';
import { FormTestAutoComponent } from './components/form-test-auto/form-test-auto.component';
import { CommonModule } from '@angular/common';
import { EnumToArrayPipe } from './pipes/toArray.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormTestComponent,
    FormTestTwoComponent,
    FormTestAutoComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MdSelectModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    MdAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

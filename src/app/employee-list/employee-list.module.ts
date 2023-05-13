import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    MatChipsModule,
  ],
  declarations: [EmployeeListComponent],
  exports: [
    EmployeeListComponent
  ]
})
export class EmployeeListModule {}

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { MatLegacyChipsModule as MatChipsModule, MatLegacyChip as MatChip } from '@angular/material/legacy-chips';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCommonModule,
    MatChipsModule
  ],
  declarations: [EmployeeListComponent],
  exports: [
    EmployeeListComponent,
    MatInputModule,
    MatCommonModule,
    MatChipsModule
  ]
})
export class EmployeeListModule {}

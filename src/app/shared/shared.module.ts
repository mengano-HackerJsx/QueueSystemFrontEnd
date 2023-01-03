import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { CreateQueueComponent } from './components/create-queue/create-queue.component';
import { MatTableModule } from '@angular/material/table';
import { ShowPersonsComponent } from './components/show-persons/show-persons.component';
import { AssignComponent } from './components/assign-person/assign.component';
import { FirstPersonComponent } from './components/first-person/first-person.component';



@NgModule({
  declarations: [
    CreatePersonComponent,
    CreateQueueComponent,
    ShowPersonsComponent,
    AssignComponent,
    FirstPersonComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MaterialModule
  ],
  exports: []
})
export class SharedModule { }

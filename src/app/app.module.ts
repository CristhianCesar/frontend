import { Routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent, ErrorDetailComponent } from './cliente/cliente.component';
import { HttpModule } from '@angular/http';

import {
  MatTableModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatMenuModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteDialogComponent } from './cliente/cliente-dialog/cliente-dialog.component';
@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatMenuModule
  ]
})
export class MaterialModule{}

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteDialogComponent,
    ErrorDetailComponent
  ],
  entryComponents: [
    ClienteDialogComponent,
    ErrorDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

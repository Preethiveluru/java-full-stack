import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DepartmentService } from './department.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DbzModule } from './dbz/dbz.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DbzModule,
    FormsModule
  ]
})
export class AppModuleModule { }

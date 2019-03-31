import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ModifyTaskComponent } from './modify-task/modify-task.component';
import { IndividualTaskComponent } from './individual-task/individual-task.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ModifyTaskComponent,
    IndividualTaskComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

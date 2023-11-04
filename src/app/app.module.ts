import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreateExpenseFormComponent } from './create-expense-form/create-expense-form.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { ListExpensesComponent } from './list-expenses/list-expenses.component';
import { SingleExpenseComponent } from './single-expense/single-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CreateExpenseFormComponent,
    ListExpensesComponent,
    SingleExpenseComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    AppRoutingModule],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }

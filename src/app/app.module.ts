import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreateExpenseFormComponent } from './create-expense-form/create-expense-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { ListExpensesComponent } from './list-expenses/list-expenses.component';
import { SingleExpenseComponent } from './single-expense/single-expense.component';
import { SingleDateComponent } from './single-date/single-date.component';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CreateExpenseFormComponent,
    ListExpensesComponent,
    SingleExpenseComponent,
    SingleDateComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    AppRoutingModule,
    RouterModule,
    HttpClientModule],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }

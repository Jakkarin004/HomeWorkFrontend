import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilingTypeComponent } from './filing-type/filing-type.component';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';
import { SaleAmountComponent } from './sale-amount/sale-amount.component';
import { TaxAmountComponent } from './tax-amount/tax-amount.component';
import { SurchargeComponent } from './surcharge/surcharge.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

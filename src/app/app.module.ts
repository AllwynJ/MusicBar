import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from "../components/admin-header/admin-header.component";
import { CartComponent } from 'src/components/cart/cart.component';
import { InstrumentsListComponent } from 'src/components/instruments-list/instruments-list.component';
import { UserHeaderComponent } from 'src/components/user-header/user-header.component';
import { UsersListComponent } from 'src/components/users-list/users-list.component';
import { TutorsListComponent } from 'src/components/tutors-list/tutors-list.component';
import { PaymentComponent } from 'src/components/payment/payment.component';
import { LoginComponent } from 'src/components/login/login.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { AlertModule } from '@coreui/angular';
import { HomePageComponent } from 'src/components/home-page/home-page.component';
import { OrdersListComponent } from 'src/components/orders-list/orders-list.component';
import { SongSheetsListComponent } from 'src/components/song-sheets-list/song-sheets-list.component';


@NgModule({
    declarations: [
        AppComponent,
        AdminHeaderComponent,
        CartComponent,
        InstrumentsListComponent,
        UserHeaderComponent,
        UsersListComponent,
        TutorsListComponent,
        PaymentComponent,
        LoginComponent,
        HeaderComponent,
        RegisterComponent,
        HomePageComponent,
        OrdersListComponent,
        SongSheetsListComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        AlertModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
})
export class AppModule { }

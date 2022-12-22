import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHeaderComponent } from 'src/components/admin-header/admin-header.component';
import { CartComponent } from 'src/components/cart/cart.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomePageComponent } from 'src/components/home-page/home-page.component';
import { InstrumentsListComponent } from 'src/components/instruments-list/instruments-list.component';
import { LoginComponent } from 'src/components/login/login.component';
import { OrdersListComponent } from 'src/components/orders-list/orders-list.component';
import { PaymentComponent } from 'src/components/payment/payment.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { SongSheetsListComponent } from 'src/components/song-sheets-list/song-sheets-list.component';
import { TutorsListComponent } from 'src/components/tutors-list/tutors-list.component';
import { UserHeaderComponent } from 'src/components/user-header/user-header.component';
import { UsersListComponent } from 'src/components/users-list/users-list.component';

const routes: Routes = [
  {path:'admin-header',component:AdminHeaderComponent},
  {path:'cart',component:CartComponent},
  {path:'instruments-list',component:InstrumentsListComponent},
  {path:'login',component:LoginComponent},
  {path:'payment',component:PaymentComponent},
  {path:'register',component:RegisterComponent},
  {path:'tutors-list',component:TutorsListComponent},
  {path:'user-header',component:UserHeaderComponent},
  {path:'users-list',component:UsersListComponent},
  {path:'header',component:HeaderComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'orders-list',component:OrdersListComponent},
  {path:'song-sheets-list',component:SongSheetsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

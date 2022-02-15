import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { MyDrinksComponent } from './profile/my-drinks/my-drinks.component';
import { CreateDrinkComponent } from './profile/create-drink/create-drink.component';
import { DrinkCardComponent } from './menu/drink-card/drink-card.component';
import { DrinkDetailComponent } from './menu/drink-card/drink-detail/drink-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './landing-page/login/login.component';
import { SignupComponent } from './landing-page/signup/signup.component';
import { FormsModule } from '@angular/forms';

import 'animate.css'

const routes: Routes = [{path: 'menu', component: MenuComponent},
{path: '', component: LandingPageComponent},
{path: 'about', component: AboutComponent},
{path: 'profile', component: ProfileComponent},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'details/:id', component: DrinkDetailComponent},
{path: 'createdrink', component: CreateDrinkComponent},
{path: 'mydrinks', component: MyDrinksComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    NavigationComponent,
    ProfileComponent,
    MyDrinksComponent,
    CreateDrinkComponent,
    DrinkCardComponent,
    DrinkDetailComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

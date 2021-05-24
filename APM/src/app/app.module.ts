// application's root angular module

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({                 // defines class as an Angular module
  declarations: [           // declarations array defines what components belong to this module
    AppComponent,
    WelcomeComponent
  ],
  imports: [                // defines the external modules we want to have available to 
    BrowserModule,          // the components that belong to this module 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },   //automatically reroutes to /welcome if anything is unrecognizable
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule   
  ],
  bootstrap: [AppComponent] // defines startup component of the application
})
export class AppModule { }

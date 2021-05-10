// application's root angular module

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({                 // defines class as an Angular module
  declarations: [           // declarations array defines what components belong to this module
    AppComponent,
    ProductListComponent
  ],
  imports: [                // defines the external modules we want to have available to 
    BrowserModule           // the components that belong to this module    
  ],
  bootstrap: [AppComponent] // defines startup component of the application
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import{ ProductListComponent } from './products/product-list.component';
import{ ProductDetailComponent } from './products/product-detail.component';
import {ProductFilterPipeClass} from './products/product-filter.pipe';
import {HttpModule} from '@angular/http';
import{StarComponent} from './shared/star.component';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
@NgModule({
  imports: [ BrowserModule,FormsModule ,HttpModule,
  RouterModule.forRoot(
    [{ path:'products',component:ProductListComponent},
    { path:'product/:id',component:ProductDetailComponent},
    { path:'welcome',component:WelcomeComponent},
    {path: 'StarComponent',component:StarComponent},
    {path: '',component:WelcomeComponent},
    {path: '**',component:WelcomeComponent}
    ] ) 
  ],
  declarations: [ AppComponent,ProductListComponent,ProductFilterPipeClass,StarComponent,WelcomeComponent,ProductDetailComponent],
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }

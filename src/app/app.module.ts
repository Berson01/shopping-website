import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import {FormsModule} from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { FourteenComponent } from './fourteen/fourteen.component';
import { BuyComponent } from './buy/buy.component';
import { ContactComponent } from './contact/contact.component';
import { FourteenplusComponent } from './fourteenplus/fourteenplus.component';
import { FifteenComponent } from './fifteen/fifteen.component';
import { TwelveComponent } from './twelve/twelve.component';
import { VivoComponent } from './vivo/vivo.component';
import { OneplustenComponent } from './oneplusten/oneplusten.component';
import { OnepluselevenComponent } from './onepluseleven/onepluseleven.component';
import { RealmeComponent } from './realme/realme.component';
import { RedmiComponent } from './redmi/redmi.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
   
    ProductComponent,
    HomeComponent,
    FourteenComponent,
    BuyComponent,
    ContactComponent,
    FourteenplusComponent,
    FifteenComponent,
    TwelveComponent,
    VivoComponent,
    OneplustenComponent,
    OnepluselevenComponent,
    RealmeComponent,
    RedmiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

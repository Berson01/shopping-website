import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
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





const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'click',component:LoginComponent},
 {path:'signup',component:SignComponent},
 {path:'home',component:HomeComponent},
 {path:'mobiles',component:ProductComponent},
 {path:'fourteen',component:FourteenComponent},
 {path:'loginpage',component:LoginComponent},
 {path:'signinpage',component:SignComponent},
 {path:'buypage',component:BuyComponent},
 {path:'cancel',component:ProductComponent},
 {path:'contact',component:ContactComponent},
 {path:'fourteenplus',component:FourteenplusComponent},
 {path:'fifteenblack',component:FifteenComponent},
 {path:'twelve red',component:TwelveComponent},
 {path:'vivov',component:VivoComponent},
 {path:'ten',component:OneplustenComponent},
 {path:'eleven',component:OnepluselevenComponent},
 {path:'realme',component:RealmeComponent},
 {path:'redmi',component:RedmiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

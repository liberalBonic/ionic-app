import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/login-page.component';
import { RegistrationPageComponent } from './registration/registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy
  }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

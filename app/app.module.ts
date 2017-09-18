import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PresentacionComponent } from './Presentacion/presentacion.component';
import { OrobrizComponent } from './orobriz/orobriz.component';
import { QEComponent } from './qe/qe.component';
import { HeaderComponent } from './components/header.component';
import { BodyComponent } from './components/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    OrobrizComponent,
    QEComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

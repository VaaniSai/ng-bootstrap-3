import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';
import { NgbdModalBasic } from './modal.basic';
import { NgbdModalComponent, NgbdModalContent } from './modal.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule.forRoot() ],
  declarations: [ AppComponent , NgbdModalBasic, NgbdModalComponent, NgbdModalContent ],
  entryComponents: [ NgbdModalContent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

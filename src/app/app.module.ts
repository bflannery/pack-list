import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PackFormComponent } from './pack-form/pack-form.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemService } from './item.service';
import { PackListComponent } from './pack-list/pack-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PackFormComponent,
    ItemDetailComponent,
    PackListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

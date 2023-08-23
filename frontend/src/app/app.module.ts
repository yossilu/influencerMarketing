import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgService } from './services/ig-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DecimalFormatPipe } from './pipes/decimal-format.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProfileHeaderComponent,
    ImageGalleryComponent,
    DecimalFormatPipe,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
  ],
  providers: [IgService],
  bootstrap: [AppComponent]
})
export class AppModule { }

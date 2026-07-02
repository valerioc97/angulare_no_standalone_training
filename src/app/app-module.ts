import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Promo } from './promo/promo';
import { TrackList } from './track-list/track-list';
import { Header } from './header/header';
import { ImageAlbum } from './image-album/image-album';
import { BindingDemo } from './binding-demo/binding-demo';
import { FormsModule } from '@angular/forms';
import { AlbumInfo } from './album-info/album-info';
import { TestoCustomPipe } from './pipes/testo-custom-pipe';

@NgModule({
  declarations: [
    App,
    Promo,
    TrackList,
    Header,
    ImageAlbum,
    BindingDemo,
    AlbumInfo,
    TestoCustomPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

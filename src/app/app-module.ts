import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Promo } from './components/promo/promo';
import { TrackList } from './components/track-list/track-list';
import { Header } from './components/header/header';
import { ImageAlbum } from './components/image-album/image-album';
import { BindingDemo } from './components/binding-demo/binding-demo';
import { FormsModule } from '@angular/forms';
import { AlbumInfo } from './components/album-info/album-info';
import { TestoCustomPipe } from './pipes/testo-custom-pipe';
import { Colore } from './directives/colore';
import { Font } from './directives/font';
import { Sfondo } from './directives/sfondo';
import { DirectiveDemo } from './components/directive-demo/directive-demo';

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
    Colore,
    Font,
    Sfondo,
    DirectiveDemo
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

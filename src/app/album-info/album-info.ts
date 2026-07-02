import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-info',
  standalone: false,
  templateUrl: './album-info.html',
  styleUrl: './album-info.css',
})
export class AlbumInfo {
  @Input() nomeAlbum: string = '';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-track-list',
  standalone: false,
  templateUrl: './track-list.html',
  styleUrl: './track-list.css',
})
export class TrackList {
  album = 'Playing the Angel';
}

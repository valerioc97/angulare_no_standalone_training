import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAlbum } from './image-album';

describe('ImageAlbum', () => {
  let component: ImageAlbum;
  let fixture: ComponentFixture<ImageAlbum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageAlbum],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageAlbum);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

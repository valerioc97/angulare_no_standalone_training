import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumInfo } from './album-info';

describe('AlbumInfo', () => {
  let component: AlbumInfo;
  let fixture: ComponentFixture<AlbumInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

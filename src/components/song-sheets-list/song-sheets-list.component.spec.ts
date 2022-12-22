import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongSheetsListComponent } from './song-sheets-list.component';

describe('SongSheetsListComponent', () => {
  let component: SongSheetsListComponent;
  let fixture: ComponentFixture<SongSheetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongSheetsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongSheetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
